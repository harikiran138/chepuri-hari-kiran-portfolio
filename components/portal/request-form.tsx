"use client";

import * as z from "zod";
import { useTransition, useState } from "react";
import { RequestSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"; 
import { createRequest } from "@/actions/portal";
// Native select used for simplicity

export const RequestForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const [formData, setFormData] = useState({
        companyName: "",
        companyWebsite: "",
        roleType: "JOB",
        message: "",
        budgetRange: ""
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        startTransition(() => {
            createRequest(formData)
                .then((data) => {
                    if (data?.error) {
                         setError(data.error);
                    }
                    if (data?.success) {
                        setSuccess(data.success);
                        // Reset form
                        setFormData({
                            companyName: "",
                            companyWebsite: "",
                            roleType: "JOB",
                            message: "",
                            budgetRange: ""
                        });
                    }
                });
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-card rounded-xl border shadow-sm">
            <h2 className="text-2xl font-bold mb-6">New Collaboration Request</h2>
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Company Name</label>
                        <Input
                            disabled={isPending}
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="Acme Corp"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Website (Optional)</label>
                        <Input
                            disabled={isPending}
                            value={formData.companyWebsite}
                            onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                            placeholder="https://acme.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Collaboration Type</label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={isPending}
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    >
                        <option value="JOB">Full-time Job</option>
                        <option value="INTERNSHIP">Internship</option>
                        <option value="FREELANCE">Freelance / Contract</option>
                        <option value="COLLABORATION">Partnership / Collaboration</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Message / Description</label>
                     <Textarea
                        disabled={isPending}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me more about the opportunity..."
                        className="min-h-[120px]"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Budget / Salary Range (Optional)</label>
                    <Input
                        disabled={isPending}
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        placeholder="e.g. $5k - $10k, or $100k - $120k/yr"
                    />
                </div>

                {error && (
                    <div className="bg-destructive/15 p-3 rounded-md text-sm text-destructive">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="bg-emerald-500/15 p-3 rounded-md text-sm text-emerald-500">
                        {success}
                    </div>
                )}

                <Button disabled={isPending} type="submit" className="w-full">
                    submit Request
                </Button>
            </form>
        </div>
    );
};
