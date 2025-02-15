
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";
import { format, addDays, startOfToday, isAfter, isBefore, setHours, setMinutes } from "date-fns";
import { Clock } from "lucide-react";

export const AppointmentSection = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate available time slots (10:00 AM to 11:00 PM IST)
  const generateTimeSlots = (selectedDate: Date | undefined) => {
    if (!selectedDate) return [];
    
    const slots = [];
    const today = startOfToday();
    const current = new Date();
    
    for (let hour = 10; hour <= 23; hour++) {
      const timeSlot = setHours(setMinutes(selectedDate, 0), hour);
      
      // If it's today, only show future time slots
      if (format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
        if (isAfter(timeSlot, current)) {
          slots.push(format(timeSlot, 'HH:mm'));
        }
      } else {
        slots.push(format(timeSlot, 'HH:mm'));
      }
    }
    
    return slots;
  };

  const handleSubmit = async () => {
    if (!date || !time) {
      toast({
        title: "Please select both date and time",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call to check and book appointment
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Appointment booked successfully!",
      description: `Your appointment is scheduled for ${format(date, 'MMMM d, yyyy')} at ${time}`
    });

    // Reset form
    setDate(undefined);
    setTime(undefined);
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto"
    >
      <div className="group relative">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative p-8 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-xl space-y-6">
          <div className="space-y-1">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-sm text-white/70">Select Date:</div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border border-white/10 bg-black/20"
                  classNames={{
                    day_selected: "bg-white/20 text-white hover:bg-white/30 hover:text-white focus:bg-white/20 focus:text-white",
                    day_today: "bg-white/10 text-white",
                    day: "hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                  }}
                  disabled={(date) => isBefore(date, startOfToday())}
                  fromDate={startOfToday()}
                  toDate={addDays(new Date(), 30)}
                />
              </div>
              
              <div className="space-y-4">
                <div className="text-sm text-white/70">Select Time (IST):</div>
                <div className="bg-black/20 rounded-md p-4 border border-white/10">
                  <Select
                    value={time}
                    onValueChange={setTime}
                    disabled={!date}
                  >
                    <SelectTrigger className="w-full bg-transparent border-white/20">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px]">
                      {generateTimeSlots(date).map((slot) => (
                        <SelectItem 
                          key={slot} 
                          value={slot}
                          className="hover:bg-white/10 cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {slot} IST
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="mt-4 text-sm text-white/50">
                    Available slots: 10:00 AM - 11:00 PM IST
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!date || !time || isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </Button>
          
          {!date && (
            <p className="text-sm text-white/50 text-center">
              Please select a date to see available time slots
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
