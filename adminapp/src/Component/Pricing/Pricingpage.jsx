import React from "react";
import { Card, CardContent, Typography, Button, Box, Stack, Checkbox, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const plans = [
  {
    title: "Free/Personal",
    subtitle: "For a Lifetime",
    buttonText: "Current Plan",
    features: [
      "Unlimited Projects",
      "Share with 5 team members",
      "Sync across devices",
      "API Access",
      "Complete Documentation",
      "Integration help",
    ],
    checked: [0, 1, 2, 3, 4, 5],
    color: "#38bdf8",
  },
  {
    title: "$89/Professional",
    subtitle: "/year",
    buttonText: "Try for free",
    features: [
      "Everything in free plan",
      "Unlimited projects",
      "Share with 15 team members",
      "30-day version history",
      "Complete Documentation",
      "Integration help",
    ],
    checked: [0, 1, 2, 3, 4, 5],
    color: "#7c3aed",
  },
  {
    title: "Custom/Enterprise",
    subtitle: "Reach out for a quote",
    buttonText: "Contact Us",
    features: [
      "Everything in Team plan",
      "Advanced security",
      "Custom contract",
      "User provisioning (SCIM)",
      "Complete Documentation",
      "SAML SSO",
    ],
    checked: [0, 1, 2, 3, 4, 5],
    color: "#7c3aed",
  },
];

const PricingCard = ({ plan }) => (
  <Card
    sx={{
      width: 300,
      borderRadius: 3,
      boxShadow: 3,
      textAlign: "center",
      p: 2,
    }}
  >
    <CardContent>
      <Typography variant="h6" fontWeight={700} mb={0.5}>
        {plan.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        {plan.subtitle}
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: plan.color,
          color: "white",
          borderRadius: 2,
          fontWeight: 600,
          mb: 2,
        }}
        disableElevation
      >
        {plan.buttonText}
      </Button>
      <Divider sx={{ mb: 2 }} />
      <Stack spacing={1} alignItems="start">
        {plan.features.map((feature, idx) => (
          <Box key={idx} display="flex" alignItems="center">
            <Checkbox checked disabled sx={{ color: plan.color }} />
            <Typography variant="body2">{feature}</Typography>
          </Box>
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default function PricingPage() {
  return (
    <Box sx={{ px: 4, py: 6, background: "#f9f9fb", minHeight: "100vh" }}>
      <Typography variant="h5" fontWeight={700} mb={1}>
        Pricing
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={4}>
        Simple Pricing. No Hidden Fees. Advance Features for your business.
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="center">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </Stack>
    </Box>
  );
}
