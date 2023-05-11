import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role='list' className='space-y-16'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Nicol</title>
        <meta name='description' content='My go-to software and gadgets for productivity, creativity, and fun.' />
      </Head>
      <SimpleLayout
        title='My go-to software and gadgets for productivity, creativity, and fun.'
        intro='I’m a firm believer that the right tools can make all the difference when it comes to productivity and creativity. That’s why I’ve put together a list of my top software and gadgets, so you can see what keeps me inspired and productive.'
      >
        <div className='space-y-20'>
          <ToolsSection title='Workstation'>
            <Tool title='16” MacBook Pro, Intel Core i7, 16GB RAM (2019)'>
              My trusty MacBook Pro is like a loyal dog and faithful friend that never leaves my side. It’s always there
              when I need it, whether I’m burning the midnight oil or tackling a new project. And just like a loyal
              canine companion, it never lets me down. It’s the perfect tool for a busy person like me who needs a
              reliable workhorse to get things done.
            </Tool>
            <Tool title='Dell D Series LED-Lit Monitor 31.5"'>
              My Dell monitor is like the big brother I never had. It’s always there to guide me through the coding
              wilderness and never complains when I stare at it for hours on end.
            </Tool>
            <Tool title='Apple Magic Keyboard and Mouse'>
              I use the Apple Magic Mouse and Keyboard to conquer my digital world with grace and precision. These sleek
              and stylish peripherals make me feel like a caffeinated ballerina, gliding through emails and documents
              with ease. However, I do have a bone to pick with the Magic Mouse – why can’t you use it and charge it at
              the same time?!
            </Tool>
            <Tool title='Herman Miller Aeron Chair'>
              My Aeron Chair by Herman Miller is like a best friend - supportive, reliable, and always there for me when
              I need it.{' '}
              <span className='prose'>
                <a href='https://quickturnconcepts.com/' target='_blank'>
                  QuickTurn Concepts
                </a>
              </span>{' '}
              , my buddy’s business, hooked me up with this sweet ride, and now I can’t imagine life without it. With
              its adjustable lumbar support, breathable mesh fabric, and 12-year warranty, it’s like the chair version
              of a superhero. So long, back pain! Hello, comfortable butt!
            </Tool>
          </ToolsSection>
          <ToolsSection title='Development tools'>
            <Tool title='VSCode'>
              VSCode, the one IDE to rule them all. It’s like the Swiss Army Knife of development tools, but with fewer
              toothpicks and more extensions. I can customize it to fit my workflow, and with its Git integration, I can
              easily undo all the mistakes I just made. It’s got Emmet support, debugging, and a terminal built right
              in. I’m pretty sure I could use it to launch a rocket to the moon if I needed to.
            </Tool>
            <Tool title='iTerm2'>
              As a developer, I rely heavily on my terminal, and iTerm2 defaulted to use PowerShell on my MacBook has
              been a game-changer. But what takes my terminal to the next level is the use of OhMyPosh, which allows me
              to create personalized themes and have a visually appealing terminal experience. To make navigating around
              even easier, I use the ”z” module, which helps me quickly jump to the directories I use the most.
            </Tool>
            <Tool title='Postman'>
              Postman is my go-to tool for testing APIs, and it’s saved me from countless hours of hair-pulling
              frustration. Plus, the little rocket animation when I hit ”Send” just makes me happy.
            </Tool>
            <Tool title='Firefox Developer Edition'>
              And let’s not forget about Firefox Developer Edition, my go-to browser for debugging and testing web apps.
              It’s like having a secret weapon that’s hiding in plain sight!
            </Tool>
          </ToolsSection>
          <ToolsSection title='Design'>
            <Tool title='Figma'>
              As a developer, I haven’t been the one doing the designing, but I absolutely love it when the designers I
              work with use Figma. It’s a fantastic tool for quickly and easily viewing mockups and designs, and it has
              become an essential part of superior workflows.
            </Tool>
          </ToolsSection>
          <ToolsSection title='Productivity'>
            <Tool title='ChatGPT'>
              ChatGPT has become an indispensable productivity tool for me. I use it for brainstorming, idea generation,
              refinement of communication emails, summarizing function descriptions, code optimization, and more. It’s
              incredibly helpful to have an AI-powered writing assistant that can provide quick and accurate summaries
              of complex topics. If you can’t outpace the robots, why not put them to work on the mundane tasks, and
              save your brainpower for the fun stuff?
            </Tool>
            <Tool title='Monster Energy Drinks'>
              When I need a pick-me-up to tackle my tasks, I call upon the powerful forces of Monster Energy drinks. My
              favorite zero-sugar flavors, Ultra Strawberry Dreams and Zero Sugar Monster Energy, keep me focused and
              alert without the dreaded sugar crash. And when I’m feeling bold, the tropical punch of Mango Loco Juice
              is my go-to. While I try to stay hydrated and take breaks, sometimes a little caffeine superhero is just
              what I need to save the day and conquer my to-do list.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
