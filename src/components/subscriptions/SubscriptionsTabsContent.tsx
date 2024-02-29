import React from "react";
import { SubscriptionsTabsContentType } from "../../models/homeType";
import PlanBasic from "./PlanBasic";
import PlanStandard from "./PlanStandard";
import PlanPremium from "./PlanPremium";

const SubscriptionsTabsContent = (props: SubscriptionsTabsContentType) => {
  const { activeTab } = props;
  const conditions: { [key: string]: React.JSX.Element } = {
    basic: <PlanBasic />,
    standard: <PlanStandard />,
    premium: <PlanPremium />,
  };
  return conditions[activeTab];
};

export default SubscriptionsTabsContent;
