import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Calendar, Plus, Clock, FileText, Eye } from "lucide-react";

export const ContentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("month");

  const scheduledContent = [
    {
      id: 1,
      title: "Product Launch Announcement",
      type: "social",
      date: "2024-12-15",
      time: "09:00",
      status: "scheduled",
      platform: "LinkedIn"
    },
    {
      id: 2,
      title: "Holiday Marketing Email",
      type: "email",
      date: "2024-12-18",
      time: "14:00",
      status: "draft",
      platform: "Email"
    },
    {
      id: 3,
      title: "Year in Review Blog",
      type: "blog",
      date: "2024-12-20",
      time: "10:00",
      status: "scheduled",
      platform: "Website"
    },
    {
      id: 4,
      title: "Customer Success Story",
      type: "social",
      date: "2024-12-16",
      time: "15:30",
      status: "scheduled",
      platform: "Twitter"
    },
    {
      id: 5,
      title: "Weekly Newsletter",
      type: "email",
      date: "2024-12-17",
      time: "08:00",
      status: "scheduled",
      platform: "Email"
    }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getContentForDate = (day: number) => {
    const dateStr = `2024-12-${day.toString().padStart(2, '0')}`;
    return scheduledContent.filter(content => content.date === dateStr);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "social": return <Eye className="h-3 w-3" />;
      case "email": return <FileText className="h-3 w-3" />;
      case "blog": return <FileText className="h-3 w-3" />;
      default: return <FileText className="h-3 w-3" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-marketing-green";
      case "scheduled": return "bg-marketing-blue";
      case "draft": return "bg-marketing-orange";
      default: return "bg-muted";
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="p-2 border border-border bg-muted/20">
        </div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayContent = getContentForDate(day);
      const isToday = day === new Date().getDate() && 
                     currentDate.getMonth() === new Date().getMonth() && 
                     currentDate.getFullYear() === new Date().getFullYear();

      days.push(
        <div
          key={day}
          className={`p-2 border border-border min-h-[100px] ${isToday ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'} transition-colors`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${isToday ? 'text-primary' : ''}`}>
              {day}
            </span>
            {dayContent.length > 0 && (
              <Badge variant="secondary" className="text-xs">
                {dayContent.length}
              </Badge>
            )}
          </div>
          <div className="space-y-1">
            {dayContent.slice(0, 2).map((content) => (
              <div
                key={content.id}
                className="text-xs p-1 rounded bg-background border border-border hover:bg-muted/50 cursor-pointer"
              >
                <div className="flex items-center gap-1 mb-1">
                  {getTypeIcon(content.type)}
                  <span className="truncate font-medium">{content.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{content.time}</span>
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(content.status)}`} />
                </div>
              </div>
            ))}
            {dayContent.length > 2 && (
              <div className="text-xs text-muted-foreground">
                +{dayContent.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-6">
      {/* Calendar Controls */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Content Calendar
            </CardTitle>
            <div className="flex items-center gap-2">
              <Select value={view} onValueChange={setView}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="day">Day</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Schedule Content
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">{formatDate(currentDate)}</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
                Today
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-0 border border-border rounded-lg overflow-hidden">
            {/* Header Row */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-3 bg-muted border-b border-border text-center font-medium text-sm">
                {day}
              </div>
            ))}
            {/* Calendar Days */}
            {renderCalendarGrid()}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Content */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {scheduledContent
              .sort((a, b) => new Date(a.date + ' ' + a.time).getTime() - new Date(b.date + ' ' + b.time).getTime())
              .slice(0, 5)
              .map((content) => (
                <div key={content.id} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                  <div className="p-2 bg-muted rounded-lg">
                    {getTypeIcon(content.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{content.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{content.date} at {content.time}</span>
                      <span>•</span>
                      <span>{content.platform}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(content.status) + " text-white"}>
                      {content.status}
                    </Badge>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};