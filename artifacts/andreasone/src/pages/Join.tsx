import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  city: z.string().min(2, "City is required"),
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one interest.",
  }),
});

const interestsList = [
  { id: "music", label: "Music & Mixes" },
  { id: "events", label: "Events & RSVPs" },
  { id: "merch", label: "Merch Drops" },
  { id: "art", label: "Art Portfolio" },
  { id: "consulting", label: "Consulting Services" },
  { id: "cannabis", label: "Cannabis Partnerships" },
];

export default function Join() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      city: "",
      interests: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Welcome to the family.", {
      description: "Keep an eye on your inbox.",
    });
    setIsSubmitted(true);
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f3efe6]">
      <section className="pt-32 pb-24 px-4 flex-1 flex items-center justify-center">
        <div className="container mx-auto max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="bg-white p-8 md:p-12 shadow-2xl border border-black/5"
          >
            {!isSubmitted ? (
              <>
                <div className="mb-10 text-center">
                  <h1 className="font-display text-5xl md:text-6xl uppercase mb-4 text-[#111111]">Join The List</h1>
                  <p className="font-sans text-muted-foreground text-lg">
                    Enter the FMLY BZNS ecosystem. Early access, secret links, and cultural dispatches.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-display tracking-widest uppercase text-xs">First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Fela" className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
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
                            <FormLabel className="font-display tracking-widest uppercase text-xs">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="fela@example.com" className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-display tracking-widest uppercase text-xs">Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 555 555 5555" className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-display tracking-widest uppercase text-xs">City</FormLabel>
                            <FormControl>
                              <Input placeholder="Los Angeles" className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="interests"
                      render={() => (
                        <FormItem className="pt-6">
                          <div className="mb-4">
                            <FormLabel className="font-display tracking-widest uppercase text-xs">What are you here for?</FormLabel>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {interestsList.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="interests"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          className="rounded-none border-black/30 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary"
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-sans text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-8">
                      <Button type="submit" className="w-full h-14 rounded-none font-display text-xl tracking-widest uppercase bg-primary hover:bg-[#111111] text-white transition-colors">
                        Subscribe
                      </Button>
                      <p className="text-center text-xs text-muted-foreground mt-4 font-sans">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </div>
                  </form>
                </Form>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <h2 className="font-display text-5xl uppercase mb-4 text-[#cf5d27]">Received.</h2>
                <p className="font-sans text-lg text-muted-foreground mb-8">
                  Welcome to the world. We'll be in touch soon.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-none font-display tracking-widest uppercase"
                >
                  Return
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
