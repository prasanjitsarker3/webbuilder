"use client";

import { useState } from "react";
import { User, Users, Building2, Check, Sun, Moon } from "lucide-react";

export interface PricingFeature {
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  weeklyPrice: number;
  features: PricingFeature[];
  icon: string;
  isPopular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "individual",
    name: "Individual",
    description:
      "Essential tools for small businesses starting out with limited projects and basic support",
    monthlyPrice: 200,
    weeklyPrice: 50,
    icon: "user",
    features: [
      { text: "Monthly strategy consultation" },
      { text: "10 hours of marketing support" },
      { text: "Basic SEO optimization" },
      { text: "Social media management" },
      { text: "Monthly performance report" },
    ],
  },
  {
    id: "team",
    name: "Team",
    description:
      "Ideal for growing businesses wanting enhanced analytics and support",
    monthlyPrice: 600,
    weeklyPrice: 150,
    icon: "users",
    isPopular: true,
    features: [
      { text: "Bi-weekly strategy consultations" },
      { text: "25 hours of marketing support" },
      { text: "Advanced SEO optimization" },
      { text: "Social media management" },
      { text: "Weekly performance report" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Best for scaling businesses requiring unlimited projects and dedicated support",
    monthlyPrice: 1000,
    weeklyPrice: 250,
    icon: "building-2",
    features: [
      { text: "Weekly strategy consultations" },
      { text: "50 hours of marketing support" },
      { text: "Email marketing campaigns" },
      { text: "Customized marketing automation" },
      { text: "Weekly performance reports and analytics" },
    ],
  },
];

const icons = {
  user: User,
  users: Users,
  "building-2": Building2,
};

const PricingCard = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className=" w-full 2xl:max-w-7xl container px-4 md:px-8  mx-auto pb-16">
      <div className="text-center mb-12">
        <h1 className=" text-3xl md:text-4xl 2xl:text-5xl font-bold mb-8">
          Choose Your <span className="italic text-primary ">Flexible</span>{" "}
          Plan
        </h1>

        {/* Custom Switch */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-gray-700 flex items-center">Weekly</span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className={`relative w-16 h-7 bg-gray-300 rounded-full transition ${
              isMonthly ? "bg-gray-300" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute left-0 bottom-0.5 w-6 h-6 bg-primary rounded-full shadow-md transition-transform transform ${
                isMonthly ? "translate-x-10" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-gray-700 flex items-center">Monthly</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => {
          const Icon = icons[plan.icon as keyof typeof icons];
          const price = isMonthly ? plan.monthlyPrice : plan.weeklyPrice;

          return (
            <div
              key={plan.id}
              className={`relative overflow-hidden rounded-3xl border ${
                plan.isPopular ? "bg-purple-600 text-white" : "bg-white"
              }`}
            >
              <div className=" p-5 2xl:p-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 2xl:mb-6 ${
                    plan.isPopular ? "bg-white/20" : "bg-purple-100"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      plan.isPopular ? "text-white" : "text-purple-600"
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={` mb-4 2xl:mb-6 ${
                    plan.isPopular ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className=" mb-4 2xl:mb-6">
                  <span className="text-5xl font-bold">${price}</span>
                  <span
                    className={`ml-2 ${
                      plan.isPopular ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    /{isMonthly ? "month" : "week"}
                  </span>
                </div>

                <ul className=" space-y-2 2xl:space-y-4 mb-4 2xl:mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 ${
                          plan.isPopular ? "text-white" : "text-purple-600"
                        }`}
                      />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 text-lg rounded-full ${
                    plan.isPopular
                      ? "bg-white text-purple-600 hover:bg-white/90"
                      : "bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  Choose {plan.isPopular ? "Plan" : `with ${plan.name}`}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingCard;
