import { Page } from "../layout/page";
import { IndicatorMonth } from "../sections/indicator-month";
import { IndicatorTime } from "../sections/indicator-time";
import { Indicators } from "../sections/indicators";
import { Satisfaction } from "../sections/satisfaction";

export const HomePage = () => {
  return (
    <Page>
      <Indicators />
      <Satisfaction />
      <IndicatorMonth />
      <IndicatorTime />
    </Page>
  );
};
