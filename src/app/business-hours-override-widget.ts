import React from 'react';

interface BusinessHoursOverrideWidgetProps {
  overrideHours: {
    start: string;
    end: string;
  } | null;
}

const BusinessHoursOverrideWidget: React.FC<BusinessHoursOverrideWidgetProps> = ({ overrideHours }) => {
  const renderBusinessHours = () => {
    if (!overrideHours) return <p>No override hours set.</p>;
    return (
      <div>
        <h3>Business Hours Override</h3>
        <p>Start: {overrideHours.start}</p>
        <p>End: {overrideHours.end}</p>
      </div>
    );
  };

  return <div>{renderBusinessHours()}</div>;
};

export default BusinessHoursOverrideWidget;