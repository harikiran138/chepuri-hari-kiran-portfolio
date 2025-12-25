"use client";

import * as z from "zod";
import { useTransition, useState } from "react";
// import { useForm } from "react-hook-form"; // Not installing rhf for now to save time/complexity if not needed, but standard is using it.
// I'll use simple state for now since I didn't install rhf explicitly, although user might have it.
// I will use controlled inputs.

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { login } from "@/actions/login";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    startTransition(() => {
      login(formData)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          }
           // Success redirects in action
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back, partner"
      backButtonLabel="Don't have an account?"
      backButtonHref="/signup"
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              disabled={isPending}
              placeholder="john.doe@example.com"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
             <Input
              disabled={isPending}
              placeholder="******"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>
        
        {error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
                <p>{error}</p>
            </div>
        )}
        
        <Button
          disabled={isPending}
          type="submit"
          className="w-full"
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
    </CardWrapper>
  );
};
