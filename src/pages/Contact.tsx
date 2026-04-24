import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  city: z.string().min(2, "City is required"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  eventDate: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      inquiryType: "",
      eventDate: "",
      budgetRange: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Inquiry received.", {
      description: "Our team will review and respond shortly.",
    });
    setIsSubmitted(true);
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <section className="pt-32 pb-24 px-4 flex-1">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="w-full lg:w-1/3"
          >
            <h1 className="font-display text-6xl md:text-8xl uppercase mb-6 text-[#111111]">Booking<br/>& Contact</h1>
            <p className="font-sans text-muted-foreground text-lg mb-12">
              For DJ bookings, creative direction, brand partnerships, or general inquiries, please use the form. 
              Serious inquiries only.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-display tracking-widest uppercase text-[#cf5d27] text-sm mb-2">Management</h3>
                <p className="font-sans text-[#111111]">mgmt@andreasone.co</p>
              </div>
              <div>
                <h3 className="font-display tracking-widest uppercase text-[#cf5d27] text-sm mb-2">Location</h3>
                <p className="font-sans text-[#111111]">Los Angeles / Global</p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="w-full lg:w-2/3 bg-[#f3efe6] p-8 md:p-12 border border-black/5 shadow-xl"
          >
            {!isSubmitted ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-display tracking-widest uppercase text-xs">Full Name</FormLabel>
                          <FormControl>
                            <Input className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
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
                            <Input className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-display tracking-widest uppercase text-xs">Phone</FormLabel>
                          <FormControl>
                            <Input className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
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
                          <FormLabel className="font-display tracking-widest uppercase text-xs">City / Location</FormLabel>
                          <FormControl>
                            <Input className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem className="col-span-1 md:col-span-1">
                          <FormLabel className="font-display tracking-widest uppercase text-xs">Inquiry Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus:ring-0 px-0 h-12 text-lg bg-transparent text-[#111111]">
                                <SelectValue placeholder="Select type..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none font-sans">
                              <SelectItem value="dj">DJ Booking</SelectItem>
                              <SelectItem value="event">Event Production</SelectItem>
                              <SelectItem value="curation">Talent Curation</SelectItem>
                              <SelectItem value="design">Brand Design</SelectItem>
                              <SelectItem value="consulting">Consulting</SelectItem>
                              <SelectItem value="cannabis">Cannabis Brand Work</SelectItem>
                              <SelectItem value="press">Press</SelectItem>
                              <SelectItem value="collab">Collaboration</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-display tracking-widest uppercase text-xs">Date (If Event)</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/DD/YYYY" className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-display tracking-widest uppercase text-xs">Budget Range</FormLabel>
                          <FormControl>
                            <Input placeholder="$..." className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-lg bg-transparent" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-display tracking-widest uppercase text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide details about your project, event, or timeline..." 
                            className="rounded-none border-b-2 border-t-0 border-x-0 border-black/20 focus-visible:ring-0 focus-visible:border-primary px-0 min-h-[120px] text-lg bg-transparent resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto h-14 px-12 rounded-none font-display text-xl tracking-widest uppercase bg-[#111111] hover:bg-[#cf5d27] text-white transition-colors">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <h2 className="font-display text-5xl uppercase mb-4 text-[#445829]">Inquiry Sent.</h2>
                <p className="font-sans text-lg text-muted-foreground mb-8">
                  We'll be in touch shortly to discuss your project.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-none font-display tracking-widest uppercase border-[#111111]"
                >
                  Send Another
                </Button>
              </motion.div>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
