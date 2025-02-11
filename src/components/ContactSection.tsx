
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactSection = () => {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-geist font-bold mb-4">
            Let's <span className="font-serif italic">Connect</span>
          </h2>
          <p className="text-gray-600">
            Ready to take your startup to the next level? Get in touch with us.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Name" className="rounded-lg" />
            <Input type="email" placeholder="Email" className="rounded-lg" />
          </div>
          <Input placeholder="Subject" className="rounded-lg" />
          <Textarea
            placeholder="Your message"
            className="min-h-[150px] rounded-lg"
          />
          <Button size="lg" className="w-full rounded-lg">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};
