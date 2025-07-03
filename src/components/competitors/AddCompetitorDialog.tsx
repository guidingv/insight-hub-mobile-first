import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface AddCompetitorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddCompetitorDialog = ({ open, onOpenChange }: AddCompetitorDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    category: "",
    description: "",
    trackPricing: true,
    trackProducts: true,
    trackContent: false,
    alertThreshold: "medium"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the form data
    console.log("Adding competitor:", formData);
    onOpenChange(false);
    // Reset form
    setFormData({
      name: "",
      website: "",
      category: "",
      description: "",
      trackPricing: true,
      trackProducts: true,
      trackContent: false,
      alertThreshold: "medium"
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Competitor</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Company Name</Label>
              <Input
                id="name"
                placeholder="TechCorp Inc."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                placeholder="techcorp.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select competitor type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="direct">Direct Competitor</SelectItem>
                <SelectItem value="indirect">Indirect Competitor</SelectItem>
                <SelectItem value="emerging">Emerging Competitor</SelectItem>
                <SelectItem value="substitute">Substitute Product</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Brief description of the competitor..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="space-y-3">
            <Label>Tracking Options</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="trackPricing"
                  checked={formData.trackPricing}
                  onCheckedChange={(checked) => setFormData({ ...formData, trackPricing: checked as boolean })}
                />
                <label htmlFor="trackPricing" className="text-sm">Track pricing changes</label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="trackProducts"
                  checked={formData.trackProducts}
                  onCheckedChange={(checked) => setFormData({ ...formData, trackProducts: checked as boolean })}
                />
                <label htmlFor="trackProducts" className="text-sm">Track product updates</label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="trackContent"
                  checked={formData.trackContent}
                  onCheckedChange={(checked) => setFormData({ ...formData, trackContent: checked as boolean })}
                />
                <label htmlFor="trackContent" className="text-sm">Track website content changes</label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="alertThreshold">Alert Threshold</Label>
            <Select value={formData.alertThreshold} onValueChange={(value) => setFormData({ ...formData, alertThreshold: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low - All changes</SelectItem>
                <SelectItem value="medium">Medium - Significant changes</SelectItem>
                <SelectItem value="high">High - Major changes only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Competitor</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};