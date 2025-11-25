import * as React from "react"
import {
  Frame,
  Map,
  PieChart,
  HeartHandshake
} from "lucide-react"

import { NavPlatform } from "@/components/app/nav-platform"
import { NavUser } from "@/components/app/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLogos } from "./nav-logos"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  platform: [
    {
      name: "All logos",
      url: "#",
      icon: Frame,
    },
    {
      name: "Contribute",
      url: "#",
      icon: HeartHandshake,
    }
  ],

  pratiks:[
    {
      name: "Languages",
      url: "#",
      icon: Frame,
    },
    {
      name: "Frontend",
      url: "#",
      icon: HeartHandshake,
    },
    {
      name: "Backend",
      url: "#",
      icon: HeartHandshake,
    },
    {
      name: "App dev",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Database",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Cloud",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Devops",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Serverless",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Authentication",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "AI - ML",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Data Eng",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Testing",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Game Dev",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Web3",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Microservice",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "CMS",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "Devtools",
      url: "#",
      icon: HeartHandshake,
    }
    ,
    {
      name: "OS",
      url: "#",
      icon: HeartHandshake,
    }
  ]
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem >
            <SidebarMenuButton asChild className="h-fit hover:cursor-pointer" >
                <div className="grid flex-1 text-left text-sm leading-tight hover:bg-sidebar">
                  <span className="truncate font-black handwriting text-4xl leading-none">Pratik</span>
                  <span className="truncate text-xs text-black/50 leading-none">from <strong>Devloke.</strong></span>
                </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
        <NavPlatform projects={data.platform} />
      <SidebarContent className="relative">
        <NavLogos projects={data.pratiks} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
