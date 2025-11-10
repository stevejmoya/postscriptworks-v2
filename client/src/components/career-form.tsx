import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";

export function CareerForm() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  
  const form = useForm<InsertApplication>({
    resolver: zodResolver(insertApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      role: "",
      experience: "",
      yearsExperience: "",
      hourlyRate: "",
      weeklyHours: "",
      portfolio: "",
      funFact: "",
      resumeBase64: "",
      resumeFilename: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    setFileName(file.name);
    
    // Convert file to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      form.setValue("resumeBase64", base64String.split(',')[1] || "");
      form.setValue("resumeFilename", file.name);
    };
    reader.readAsDataURL(file);
  };

  const mutation = useMutation({
    mutationFn: (data: InsertApplication) =>
      apiRequest("POST", "/api/applications", data),
    onSuccess: () => {
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
      setFileName("");
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  return (
    <div className="bg-[#101820] text-white p-6 rounded-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
          className="space-y-6 text-lg"
        >
          <p className="text-xl leading-relaxed">
            Hi, my name is{" "}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-64 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="Your name"
                    {...field}
                  />
                </FormControl>
              )}
            />{" "}
            and I'm based in{" "}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-64 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="City, State"
                    {...field}
                  />
                </FormControl>
              )}
            />
            . I am a{" "}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-64 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="Designer/Marketing/etc."
                    {...field}
                  />
                </FormControl>
              )}
            />{" "}
            with{" "}
            <FormField
              control={form.control}
              name="yearsExperience"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-16 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="0"
                    {...field}
                  />
                </FormControl>
              )}
            />{" "}
            years of experience. My hourly rate is ${" "}
            <FormField
              control={form.control}
              name="hourlyRate"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-24 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="Rate"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              )}
            />{" "}
            and I'm currently available to devote an avg. of{" "}
            <FormField
              control={form.control}
              name="weeklyHours"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-16 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="Hours"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              )}
            />{" "}
            hours per week on projects. My email is{" "}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-64 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="email@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
              )}
            />{" "}
            and my website / portfolio site is{" "}
            <FormField
              control={form.control}
              name="portfolio"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-64 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="https://your-site.com"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              )}
            />
            . A fun fact about me is that{" "}
            <FormField
              control={form.control}
              name="funFact"
              render={({ field }) => (
                <FormControl>
                  <Input
                    className="bg-transparent border-b border-[#4ACB6B] inline-block w-72 mx-2 focus-visible:ring-0 focus-visible:border-[#4ACB6B]"
                    placeholder="Something interesting about you"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
              )}
            />
            .
          </p>
          
          {/* Hidden Form Field for Experience */}
          <div className="hidden">
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormControl>
                  <Input {...field} value="Applied through interactive form" />
                </FormControl>
              )}
            />
          </div>
          
          {/* Resume Upload */}
          <div className="mt-8">
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#4ACB6B] hover:bg-[#42b863] text-white flex items-center gap-2"
              >
                <Upload size={18} />
                Upload Resume
              </Button>
              {fileName && <span className="text-gray-300 text-sm">{fileName}</span>}
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              className="bg-[#4ACB6B] hover:bg-[#42b863] text-white px-6 py-3 rounded flex items-center gap-2"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Rock and Roll"}
              <ArrowRight size={18} />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
