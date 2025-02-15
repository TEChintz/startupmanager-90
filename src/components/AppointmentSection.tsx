
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";
import { format, addDays, startOfToday, isAfter, isBefore, setHours, setMinutes } from "date-fns";

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
      className="space-y-6 p-8 rounded-xl bg-white/5 border border-white/10"
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Book an Appointment</h2>
        <p className="text-gray-400">Schedule a meeting with our team</p>
      </div>

      <div className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border border-white/10"
          disabled={(date) => isBefore(date, startOfToday())}
          fromDate={startOfToday()}
          toDate={addDays(new Date(), 30)}
        />

        <Select
          value={time}
          onValueChange={setTime}
          disabled={!date}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {generateTimeSlots(date).map((slot) => (
              <SelectItem key={slot} value={slot}>
                {slot} IST
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleSubmit}
          disabled={!date || !time || isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </Button>
      </div>
    </motion.div>
  );
};
