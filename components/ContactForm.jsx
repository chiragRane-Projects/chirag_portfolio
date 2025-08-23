"use client"
import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const ContactForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInput({ ...userInput, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    try {
      const emailParams = {
        from_name: userInput.name,
        reply_to: userInput.email,
        message: userInput.message,
      }

      await emailjs.send(serviceID, templateID, emailParams, userID)

      toast.success("Message sent successfully 🚀")
      setUserInput({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-16 md:px-20 lg:px-40">
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <h2 className="text-muted-foreground text-center">
          Fill the form below — I’ll reply within 24 hours.
        </h2>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={userInput.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={userInput.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  value={userInput.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ContactForm
