"use client";
import { useState } from "react";
import { useVerifySession } from "@/hooks/userVerifySession";
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Eye,
  PlusCircle,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import Header from "../../components/Header";

export default function Dashboard() {
  const [data, setData] = useState([]);
  // useVerifySession();

 
 

  const quickActions = [
    {
      title: "Create New Article",
      description: "Write and publish a new blog post",
      href: "/dashboard/addBlog",
      icon: PlusCircle,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Manage Articles",
      description: "View, edit, or delete existing articles",
      href: "/dashboard/blogs",
      icon: FileText,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "User Management",
      description: "Manage user accounts and permissions",
      href: "/dashboard/users",
      icon: Users,
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="dashboard" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, Admin!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your blog today.
          </p>
        </div>

      

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card key={action.title} className="group hover:shadow-lg transition-all duration-200 border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {action.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {action.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={action.href}>
                      <Button className={`w-full ${action.color} text-white`}>
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Articles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Articles</span>
                <Link href="/dashboard/blogs">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Sample Article Title {i}
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>User Activity</span>
                <Link href="/dashboard/users">
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        User {i} joined
                      </p>
                      <p className="text-xs text-gray-500">5 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
