import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  repeatPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  }),
  acceptPrivacy: z.boolean().refine(val => val === true, {
    message: "You must accept the privacy policy"
  })
}).refine((data) => data.password === data.repeatPassword, {
  message: "Passwords don't match",
  path: ["repeatPassword"],
});

export function SignupModal({ isOpen, onClose, t }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      password: "",
      repeatPassword: "",
      acceptTerms: false,
      acceptPrivacy: false,
    },
  });

  function onSubmit(values) {
    console.log(values);
    // Here you would typically send the form data to your backend
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.signupModal.title}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.signupModal.name}</FormLabel>
                  <FormControl>
                    <Input placeholder={`${t.signupModal.name}...`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.signupModal.company}</FormLabel>
                  <FormControl>
                    <Input placeholder={`${t.signupModal.company}...`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.signupModal.email}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={`${t.signupModal.email}...`} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.signupModal.password}</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repeatPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.signupModal.repeatPassword}</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="acceptTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      {t.signupModal.acceptTerms}{' '}
                      <a href="https://talent24.ai/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {t.signupModal.termsConditions}
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="acceptPrivacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      {t.signupModal.acceptPrivacy}{' '}
                      <a href="https://www.alfabcn.ai/es/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {t.signupModal.privacyPolicy}
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">{t.signupModal.createAccount}</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}