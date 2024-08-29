import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
    // Here you would typically handle the login logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 flex items-center justify-center">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="bg-blue-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-center">Login to Talent AI</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-600">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} className="border-blue-300 focus:border-blue-500" />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-600">Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} className="border-blue-300 focus:border-blue-500" />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Login</Button>
            </form>
          </Form>
          <div className="mt-4">
            <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50" onClick={() => console.log("Login with Google")}>
              Login with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
