"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  PenBox,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function GrowthToolsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2">
          <StarsIcon className="h-4 w-4" />
          <span className="hidden md:block">Growth Tools</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/resume" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Build Resume
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/ai-cover-letter" className="flex items-center gap-2">
            <PenBox className="h-4 w-4" />
            Cover Letter
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/interview" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Interview Prep
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
