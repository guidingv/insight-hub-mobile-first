import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Upload, User, Building, Mail, Phone, DollarSign, Tag } from "lucide-react";

export const AddLead = () => {
  const [leadData, setLeadData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    jobTitle: "",
    website: "",
    source: "",
    stage: "new",
    priority: "medium",
    value: "",
    assignee: "",
    notes: "",
    tags: []
  });

  const [csvData, setCsvData] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    "Hot Lead", "Enterprise", "Small Business", "Startup", "Referral", 
    "Demo Requested", "Pricing Inquiry", "Feature Request", "Competition"
  ];

  const leadSources = [
    "Website", "LinkedIn", "Cold Email", "Referral", "Trade Show", 
    "Social Media", "Google Ads", "Content Marketing", "Partnership"
  ];

  const teamMembers = [
    "John Doe", "Jane Smith", "Mike Johnson", "Sarah Wilson", "Tom Brown"
  ];

  const handleInputChange = (field: string, value: string) => {
    setLeadData(prev => ({ ...prev, [field]: value }));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the form data
    console.log("Adding lead:", { ...leadData, tags: selectedTags });
    // Reset form
    setLeadData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      jobTitle: "",
      website: "",
      source: "",
      stage: "new",
      priority: "medium",
      value: "",
      assignee: "",
      notes: "",
      tags: []
    });
    setSelectedTags([]);
  };

  const processCsvData = () => {
    // Simple CSV processing simulation
    const lines = csvData.split('\n').filter(line => line.trim());
    const leads = lines.slice(1).map(line => {
      const [firstName, lastName, email, company, phone] = line.split(',');
      return { firstName, lastName, email, company, phone };
    });
    console.log("Processed leads:", leads);
    setCsvData("");
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="manual" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          <TabsTrigger value="import">Import Leads</TabsTrigger>
        </TabsList>

        <TabsContent value="manual">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Add New Lead
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={leadData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={leadData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        className="pl-10"
                        value={leadData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        className="pl-10"
                        value={leadData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="company"
                        className="pl-10"
                        value={leadData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={leadData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    />
                  </div>
                </div>

                {/* Lead Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="source">Lead Source</Label>
                    <Select value={leadData.source} onValueChange={(value) => handleInputChange("source", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        {leadSources.map((source) => (
                          <SelectItem key={source} value={source.toLowerCase().replace(" ", "_")}>
                            {source}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={leadData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="value">Deal Value</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="value"
                        type="number"
                        className="pl-10"
                        placeholder="0"
                        value={leadData.value}
                        onChange={(e) => handleInputChange("value", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assignee">Assign To</Label>
                  <Select value={leadData.assignee} onValueChange={(value) => handleInputChange("assignee", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team member" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamMembers.map((member) => (
                        <SelectItem key={member} value={member.toLowerCase().replace(" ", "_")}>
                          {member}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {availableTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleTag(tag)}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {selectedTags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      <span className="text-sm text-muted-foreground">Selected:</span>
                      {selectedTags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Add any additional notes about this lead..."
                    value={leadData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit">
                    <Save className="mr-2 h-4 w-4" />
                    Save Lead
                  </Button>
                  <Button type="button" variant="outline">
                    Save & Add Another
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="import">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Import Leads
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="csvData">CSV Data</Label>
                <Textarea
                  id="csvData"
                  placeholder="Paste CSV data here or upload a file&#10;Format: First Name, Last Name, Email, Company, Phone&#10;Example:&#10;John,Doe,john@example.com,Example Corp,555-1234"
                  className="min-h-[200px]"
                  value={csvData}
                  onChange={(e) => setCsvData(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button onClick={processCsvData} disabled={!csvData.trim()}>
                  <Upload className="mr-2 h-4 w-4" />
                  Process CSV Data
                </Button>
                <Button variant="outline">
                  Upload CSV File
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <h4 className="font-medium mb-1">CSV Format Requirements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>First row should contain headers</li>
                  <li>Required columns: First Name, Last Name, Email, Company</li>
                  <li>Optional columns: Phone, Job Title, Website</li>
                  <li>Maximum 1000 rows per import</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};