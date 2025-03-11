import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the TAILWAG landing page
  
  // Submit email for newsletter/trial
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: "Valid email is required" });
      }
      
      // In a real app, we would store this in a database
      // For now, just respond with success
      return res.status(200).json({ 
        message: "Subscription successful",
        email
      });
    } catch (error) {
      console.error("Error in subscribe:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get information about pricing plans
  app.get("/api/pricing", (_req, res) => {
    const plans = [
      {
        id: "monthly",
        name: "Monthly Discovery",
        price: 49.99,
        period: "month",
        features: [
          "5-7 perfectly matched products",
          "Full AI Assistant access",
          "Comprehensive data cards"
        ]
      },
      {
        id: "quarterly",
        name: "3-Month Precision",
        price: 139.99,
        pricePerMonth: 46.66,
        features: [
          "Enhanced algorithm training",
          "Priority shipping",
          "All Monthly benefits"
        ]
      },
      {
        id: "biannual",
        name: "6-Month Excellence",
        price: 269.99,
        pricePerMonth: 44.99,
        features: [
          "Advanced preference learning",
          "One free product replacement",
          "All 3-Month benefits"
        ],
        popular: true
      },
      {
        id: "annual",
        name: "12-Month Mastery",
        price: 499.99,
        pricePerMonth: 41.67,
        features: [
          "Exclusive limited-edition products",
          "Quarterly specialized assessment",
          "Custom preference reporting",
          "All 6-Month benefits"
        ]
      }
    ];
    
    res.json({ plans });
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real app, we would store this in a database and send an email
      // For now, just respond with success
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error in contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
