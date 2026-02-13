import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import clsx from "clsx";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">

<h1 className="text-5xl">Welcome to</h1>
        <h3 className={title({ tone: "primary", fontWeight: "extrabold", size: "xlg",  })}>Space Dezyn&nbsp;</h3>

       
       
        <br />
        
        <p className={subtitle({ class: "mt-4", tone: "dark" })}>
           
          A premier <span className={title({ tone: "gradientOrange", fontWeight: "extrabold" })}>interior design studio</span> in Abuja, Nigeria specializing in  <span className={title({ tone: "gradientOrange", fontWeight: "extrabold" })}>interior design studio</span>  residential and commercial interiors, immersive 3D visualization, and smart home integration.
           
            {/* We blend creativity with technology to craft luxurious, functional spaces that reflect our clients' unique lifestyles and aspirations. Our services include bespoke interior design, 3D virtual walkthroughs, and smart home solutions, all delivered with exceptional attention to detail and personalized service. Whether you're looking to transform your home or elevate your commercial space, Space Dezyn is your trusted partner in creating stunning, innovative interiors that inspire and delight. */}
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={clsx(buttonStyles({
           
            radius: "full",
            variant: "shadow",
          }),"bg-orange-500 text-black p-7" )}
          href={siteConfig.links.docs}
        >
          View Our Projects
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
