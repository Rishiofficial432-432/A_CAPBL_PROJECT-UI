import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  Menu,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-zinc-900/50 backdrop-blur-xl border-r border-white/10 hidden md:flex flex-col z-50">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            VANGARD
          </h1>
          <p className="text-xs text-zinc-500 mt-1 tracking-widest uppercase">Career Agent</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <NavItem icon={<Briefcase size={20} />} label="Opportunities" />
          <NavItem icon={<Users size={20} />} label="Network" />
          <NavItem icon={<TrendingUp size={20} />} label="Analytics" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen relative">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 md:hidden">
            <button className="p-2 text-zinc-400 hover:text-white">
              <Menu size={24} />
            </button>
            <span className="font-bold text-xl">VANGARD</span>
          </div>
          
          <div className="hidden md:block">
            <h2 className="text-xl font-semibold">Dashboard Overview</h2>
            <p className="text-sm text-zinc-500">Welcome back, User</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="text" 
                placeholder="Search opportunities..." 
                className="bg-zinc-900 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500/50 w-64 transition-all"
              />
            </div>
            <button className="p-2 text-zinc-400 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="Active Applications" 
              value="12" 
              change="+2 this week" 
              icon={<Briefcase className="text-purple-400" />} 
            />
            <StatCard 
              title="Profile Views" 
              value="1,248" 
              change="+15% vs last month" 
              icon={<Users className="text-pink-400" />} 
            />
            <StatCard 
              title="Interview Requests" 
              value="3" 
              change="New today!" 
              icon={<CheckCircle className="text-emerald-400" />} 
            />
          </div>

          {/* Recent Activity & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Activity Feed */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock size={18} className="text-zinc-400" />
                Recent Activity
              </h3>
              <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 space-y-6">
                <ActivityItem 
                  title="Application Viewed" 
                  company="TechCorp Inc." 
                  time="2 hours ago" 
                  status="viewed"
                />
                <ActivityItem 
                  title="New Job Match Found" 
                  company="Senior React Developer" 
                  time="5 hours ago" 
                  status="match"
                />
                <ActivityItem 
                  title="Application Submitted" 
                  company="InnovateLabs" 
                  time="1 day ago" 
                  status="submitted"
                />
              </div>
            </div>

            {/* Suggested Roles */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp size={18} className="text-zinc-400" />
                Top Matches
              </h3>
              <div className="space-y-4">
                <JobCard 
                  role="Frontend Engineer" 
                  company="Vercel" 
                  match="98%" 
                />
                <JobCard 
                  role="Product Designer" 
                  company="Linear" 
                  match="95%" 
                />
                <JobCard 
                  role="Full Stack Dev" 
                  company="Supabase" 
                  match="92%" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all duration-200 ${active ? 'bg-white/10 text-white font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({ title, value, change, icon }: { title: string, value: string, change: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-zinc-400 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-3 bg-white/5 rounded-xl">
          {icon}
        </div>
      </div>
      <p className="text-xs text-zinc-500">{change}</p>
    </motion.div>
  );
}

function ActivityItem({ title, company, time, status }: { title: string, company: string, time: string, status: 'viewed' | 'match' | 'submitted' }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`mt-1 w-2 h-2 rounded-full ${status === 'match' ? 'bg-purple-500' : status === 'viewed' ? 'bg-blue-500' : 'bg-emerald-500'}`}></div>
      <div className="flex-1">
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-zinc-400 text-xs mt-0.5">{company}</p>
      </div>
      <span className="text-xs text-zinc-600">{time}</span>
    </div>
  );
}

function JobCard({ role, company, match }: { role: string, company: string, match: string }) {
  return (
    <div className="bg-zinc-900/30 border border-white/10 rounded-xl p-4 hover:border-purple-500/30 transition-colors cursor-pointer group">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-sm group-hover:text-purple-400 transition-colors">{role}</h4>
          <p className="text-zinc-500 text-xs mt-0.5">{company}</p>
        </div>
        <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">{match}</span>
      </div>
    </div>
  );
}
