import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { HeroFeatures } from "@/lib/types/hero-feature";
import { cn } from "@/lib/utils";

interface FeaturesListingProps {
  features: HeroFeatures;
}

const FeaturesListing = ({ features }: FeaturesListingProps) => {
  const twoColumnFeatureData: { one: HeroFeatures; two: HeroFeatures } = {
    one: [],
    two: [],
  };
  const threeColumnFeatureData: {
    one: HeroFeatures;
    two: HeroFeatures;
    three: HeroFeatures;
  } = { one: [], two: [], three: [] };

  features.forEach((feature, index) => {
    // update two column feature data object
    if (index % 2 === 0) {
      twoColumnFeatureData["one"].push(feature);
    } else {
      twoColumnFeatureData["two"].push(feature);
    }
    // update three column feature data object
    if (
      threeColumnFeatureData["one"].length ===
        threeColumnFeatureData["two"].length &&
      threeColumnFeatureData["two"].length ===
        threeColumnFeatureData["three"].length
    ) {
      threeColumnFeatureData["one"].push(feature);
    } else if (
      threeColumnFeatureData["two"].length ===
      threeColumnFeatureData["three"].length
    ) {
      threeColumnFeatureData["two"].push(feature);
    } else {
      threeColumnFeatureData["three"].push(feature);
    }
  });
  return (
    <>
      <section className="grid gap-[16px] md:hidden">
        {features.map((feature) => (
          <div key={feature.title} className="group min-w-full">
            <Card className="group-hover:border-input/60">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.content}</CardDescription>
              </CardHeader>

              <CardContent className="w-full text-foreground/60">
                <ScrollArea className="w-full">
                  <div className="flex flex-col gap-[16px] xs:flex-row">
                    {feature.subFeatures.map((subFeature) => (
                      <Link
                        href={subFeature.href}
                        key={subFeature.hrefText}
                        className="theme-link flex items-center"
                      >
                        <FaCircle
                          className={cn(
                            "mr-[8px] text-[6px] mt-[4px]",
                            subFeature.completed
                              ? "text-primary"
                              : "text-foreground/40"
                          )}
                        />{" "}
                        {subFeature.hrefText}
                      </Link>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>

      {/* Two column feature */}
      <section className="hidden md:grid grid-cols-2 gap-[16px] lg:hidden">
        <div className="flex flex-col gap-[16px]">
          {twoColumnFeatureData["one"].map((feature) => (
            <div key={feature.title} className="group min-w-full">
              <Card className="group-hover:border-input/60">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.content}</CardDescription>
                </CardHeader>

                <CardContent className="w-full text-foreground/60">
                  <ScrollArea className="w-full">
                    <div className="flex flex-col gap-[16px] xs:flex-row">
                      {feature.subFeatures.map((subFeature) => (
                        <Link
                          href={subFeature.href}
                          key={subFeature.hrefText}
                          className="theme-link flex items-center"
                        >
                          <FaCircle
                            className={cn(
                              "mr-[8px] text-[6px] mt-[4px]",
                              subFeature.completed
                                ? "text-primary"
                                : "text-foreground/40"
                            )}
                          />{" "}
                          {subFeature.hrefText}
                        </Link>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[16px]">
          {twoColumnFeatureData["two"].map((feature) => (
            <div key={feature.title} className="group min-w-full">
              <Card className="group-hover:border-input/60">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.content}</CardDescription>
                </CardHeader>

                <CardContent className="w-full text-foreground/60">
                  <ScrollArea className="w-full">
                    <div className="flex flex-col gap-[16px] xs:flex-row">
                      {feature.subFeatures.map((subFeature) => (
                        <Link
                          href={subFeature.href}
                          key={subFeature.hrefText}
                          className="theme-link flex items-center"
                        >
                          <FaCircle
                            className={cn(
                              "mr-[8px] text-[6px] mt-[4px]",
                              subFeature.completed
                                ? "text-primary"
                                : "text-foreground/40"
                            )}
                          />{" "}
                          {subFeature.hrefText}
                        </Link>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
      {/* Three column feature */}
      <section className="hidden lg:grid grid-cols-3 gap-[16px]">
        <div className="flex flex-col gap-[16px]">
          {threeColumnFeatureData["one"].map((feature) => (
            <div key={feature.title} className="group min-w-full">
              <Card className="group-hover:border-input/60">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.content}</CardDescription>
                </CardHeader>

                <CardContent className="w-full text-foreground/60">
                  <ScrollArea className="w-full">
                    <div className="flex flex-col gap-[16px] xs:flex-row">
                      {feature.subFeatures.map((subFeature) => (
                        <Link
                          href={subFeature.href}
                          key={subFeature.hrefText}
                          className="theme-link flex items-center"
                        >
                          <FaCircle
                            className={cn(
                              "mr-[8px] text-[6px] mt-[4px]",
                              subFeature.completed
                                ? "text-primary"
                                : "text-foreground/40"
                            )}
                          />{" "}
                          {subFeature.hrefText}
                        </Link>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[16px]">
          {threeColumnFeatureData["two"].map((feature) => (
            <div key={feature.title} className="group min-w-full">
              <Card className="group-hover:border-input/60">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.content}</CardDescription>
                </CardHeader>

                <CardContent className="w-full text-foreground/60">
                  <ScrollArea className="w-full">
                    <div className="flex flex-col gap-[16px] xs:flex-row">
                      {feature.subFeatures.map((subFeature) => (
                        <Link
                          href={subFeature.href}
                          key={subFeature.hrefText}
                          className="theme-link flex items-center"
                        >
                          <FaCircle
                            className={cn(
                              "mr-[8px] text-[6px] mt-[4px]",
                              subFeature.completed
                                ? "text-primary"
                                : "text-foreground/40"
                            )}
                          />{" "}
                          {subFeature.hrefText}
                        </Link>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[16px]">
          {threeColumnFeatureData["three"].map((feature) => (
            <div key={feature.title} className="group min-w-full">
              <Card className="group-hover:border-input/60">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.content}</CardDescription>
                </CardHeader>

                <CardContent className="w-full text-foreground/60">
                  <ScrollArea className="w-full">
                    <div className="flex flex-col gap-[16px] xs:flex-row">
                      {feature.subFeatures.map((subFeature) => (
                        <Link
                          href={subFeature.href}
                          key={subFeature.hrefText}
                          className="theme-link flex items-center"
                        >
                          <FaCircle
                            className={cn(
                              "mr-[8px] text-[6px] mt-[4px]",
                              subFeature.completed
                                ? "text-primary"
                                : "text-foreground/40"
                            )}
                          />{" "}
                          {subFeature.hrefText}
                        </Link>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesListing;
