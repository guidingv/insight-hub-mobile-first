import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, Download, Mail, Phone, Eye, Edit, Trash2 } from "lucide-react";

export const LeadManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);

  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      email: "sarah@techstart.com",
      phone: "+1 (555) 123-4567",
      source: "Website",
      stage: "qualified",
      value: 25000,
      priority: "high",
      assignee: "John Doe",
      created: "2024-12-10",
      lastContact: "2024-12-12"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions",
      email: "m.chen@digital.com",
      phone: "+1 (555) 987-6543",
      source: "Referral",
      stage: "contacted",
      value: 18500,
      priority: "medium",
      assignee: "Jane Smith",
      created: "2024-12-09",
      lastContact: "2024-12-11"
    },
    {
      id: 3,
      name: "Emma Wilson",
      company: "Growth Co.",
      email: "emma@growth.co",
      phone: "+1 (555) 456-7890",
      source: "LinkedIn",
      stage: "new",
      value: 32000,
      priority: "high",
      assignee: "Mike Johnson",
      created: "2024-12-12",
      lastContact: "2024-12-12"
    },
    {
      id: 4,
      name: "David Rodriguez",
      company: "Innovate Ltd.",
      email: "david@innovate.com",
      phone: "+1 (555) 321-0987",
      source: "Website",
      stage: "proposal",
      value: 45000,
      priority: "high",
      assignee: "John Doe",
      created: "2024-12-08",
      lastContact: "2024-12-11"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      company: "StartupFlow",
      email: "lisa@startupflow.com",
      phone: "+1 (555) 654-3210",
      source: "Cold Outreach",
      stage: "negotiation",
      value: 67000,
      priority: "high",
      assignee: "Jane Smith",
      created: "2024-12-05",
      lastContact: "2024-12-10"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "new": return "bg-marketing-blue text-white";
      case "contacted": return "bg-marketing-purple text-white";
      case "qualified": return "bg-marketing-green text-white";
      case "proposal": return "bg-marketing-orange text-white";
      case "negotiation": return "bg-primary text-white";
      case "closed_won": return "bg-marketing-green text-white";
      case "closed_lost": return "bg-destructive text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-white";
      case "medium": return "bg-marketing-orange text-white";
      case "low": return "bg-marketing-green text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = stageFilter === "all" || lead.stage === stageFilter;
    const matchesPriority = priorityFilter === "all" || lead.priority === priorityFilter;
    return matchesSearch && matchesStage && matchesPriority;
  });

  const toggleLeadSelection = (leadId: number) => {
    setSelectedLeads(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedLeads.length === filteredLeads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(filteredLeads.map(lead => lead.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Lead Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search leads by name, company, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={stageFilter} onValueChange={setStageFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="qualified">Qualified</SelectItem>
                <SelectItem value="proposal">Proposal</SelectItem>
                <SelectItem value="negotiation">Negotiation</SelectItem>
                <SelectItem value="closed_won">Closed Won</SelectItem>
                <SelectItem value="closed_lost">Closed Lost</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          {/* Bulk Actions */}
          {selectedLeads.length > 0 && (
            <div className="flex items-center gap-2 mb-4 p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">{selectedLeads.length} selected</span>
              <Button size="sm" variant="outline">Assign</Button>
              <Button size="sm" variant="outline">Change Stage</Button>
              <Button size="sm" variant="outline">Export</Button>
              <Button size="sm" variant="outline">Delete</Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>Lead</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedLeads.includes(lead.id)}
                      onCheckedChange={() => toggleLeadSelection(lead.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-sm text-muted-foreground">{lead.company}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">{lead.email}</div>
                      <div className="text-sm text-muted-foreground">{lead.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{lead.source}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStageColor(lead.stage)}>
                      {lead.stage}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(lead.priority)}>
                      {lead.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${lead.value.toLocaleString()}
                  </TableCell>
                  <TableCell>{lead.assignee}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {lead.lastContact}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Mail className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};