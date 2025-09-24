"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Please write a longer message"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit() {
    setLoading(true);
    try {
      await fetch("/api/contact", { method: "POST" });
      toast.success("Message sent! I’ll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-sm font-medium" htmlFor="name">Name</label>
        <input id="name" className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2" {...register("name")} />
        {formState.errors.name && (
          <p className="mt-1 text-sm text-red-500">{formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="email">Email</label>
        <input id="email" type="email" className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2" {...register("email")} />
        {formState.errors.email && (
          <p className="mt-1 text-sm text-red-500">{formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="message">Message</label>
        <textarea id="message" rows={5} className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2" {...register("message")} />
        {formState.errors.message && (
          <p className="mt-1 text-sm text-red-500">{formState.errors.message.message}</p>
        )}
      </div>
      <button disabled={loading} className="rounded-md bg-gradient-to-r from-[var(--color-primary-from)] to-[var(--color-primary-to)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}


