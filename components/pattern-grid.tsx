"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const patterns = [
  {
    title: "Overlay",
    description: "Show secondary elements and important messages in a layer on top of the page.",
    component: (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Overlay</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Overlay Example</DialogTitle>
            <DialogDescription>
              This is an example of an overlay using the Dialog component.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input id="name" placeholder="John Doe" className="col-span-3" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    ),
  },
  {
    title: "Data Table",
    description: "Show collections with multiple attributes in a table to make the data easy to scan, analyze, and customize.",
    component: (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>alice@example.com</TableCell>
            <TableCell>Developer</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Smith</TableCell>
            <TableCell>bob@example.com</TableCell>
            <TableCell>Designer</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    title: "Tabs",
    description: "Use tabs to alternate between views within the same context, not to navigate to different areas.",
    component: (
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    ),
  },
]

export function PatternGrid() {
  return (
    <div className="container py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pattern.title}</CardTitle>
              <CardDescription>{pattern.description}</CardDescription>
            </CardHeader>
            <CardContent>{pattern.component}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}