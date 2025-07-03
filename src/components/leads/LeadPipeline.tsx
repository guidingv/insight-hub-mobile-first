import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Plus, DollarSign, User, Mail, Phone } from "lucide-react";

export const LeadPipeline = () => {
  const [stages, setStages] = useState({
    new: {
      title: "New",
      leads: [
        { id: "1", name: "Sarah Johnson", company: "TechStart Inc.", value: 25000, priority: "high" },
        { id: "2", name: "Emma Wilson", company: "Growth Co.", value: 32000, priority: "high" }
      ]
    },
    contacted: {
      title: "Contacted",
      leads: [
        { id: "3", name: "Michael Chen", company: "Digital Solutions", value: 18500, priority: "medium" }
      ]
    },
    qualified: {
      title: "Qualified",
      leads: [
        { id: "4", name: "David Rodriguez", company: "Innovate Ltd.", value: 45000, priority: "high" }
      ]
    },
    proposal: {
      title: "Proposal",
      leads: [
        { id: "5", name: "Lisa Anderson", company: "StartupFlow", value: 67000, priority: "high" }
      ]
    },
    negotiation: {
      title: "Negotiation",
      leads: [
        { id: "6", name: "Tom Wilson", company: "NextGen Tech", value: 89000, priority: "high" }
      ]
    },
    closed_won: {
      title: "Closed Won",
      leads: [
        { id: "7", name: "Amy Carter", company: "Success Corp", value: 54000, priority: "high" }
      ]
    },
    closed_lost: {
      title: "Closed Lost",
      leads: [
        { id: "8", name: "Mark Davis", company: "Lost Deal Inc", value: 23000, priority: "medium" }
      ]
    }
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-white";
      case "medium": return "bg-marketing-orange text-white";
      case "low": return "bg-marketing-green text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStageColor = (stageKey: string) => {
    switch (stageKey) {
      case "new": return "border-marketing-blue";
      case "contacted": return "border-marketing-purple";
      case "qualified": return "border-marketing-green";
      case "proposal": return "border-marketing-orange";
      case "negotiation": return "border-primary";
      case "closed_won": return "border-marketing-green";
      case "closed_lost": return "border-destructive";
      default: return "border-border";
    }
  };

  const calculateStageTotal = (leads: any[]) => {
    return leads.reduce((total, lead) => total + lead.value, 0);
  };

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = stages[source.droppableId as keyof typeof stages];
    const finish = stages[destination.droppableId as keyof typeof stages];

    if (start === finish) {
      const newLeadIds = Array.from(start.leads);
      const [movedLead] = newLeadIds.splice(source.index, 1);
      newLeadIds.splice(destination.index, 0, movedLead);

      const newStage = {
        ...start,
        leads: newLeadIds,
      };

      setStages({
        ...stages,
        [source.droppableId]: newStage,
      });
      return;
    }

    // Moving from one stage to another
    const startLeads = Array.from(start.leads);
    const [movedLead] = startLeads.splice(source.index, 1);
    
    const finishLeads = Array.from(finish.leads);
    finishLeads.splice(destination.index, 0, movedLead);

    const newStart = {
      ...start,
      leads: startLeads,
    };

    const newFinish = {
      ...finish,
      leads: finishLeads,
    };

    setStages({
      ...stages,
      [source.droppableId]: newStart,
      [destination.droppableId]: newFinish,
    });
  };

  return (
    <div className="space-y-6">
      {/* Pipeline Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.entries(stages).map(([stageKey, stage]) => (
              <div key={stageKey} className="text-center">
                <div className="text-2xl font-bold">{stage.leads.length}</div>
                <div className="text-sm text-muted-foreground">{stage.title}</div>
                <div className="text-sm font-medium">
                  ${calculateStageTotal(stage.leads).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pipeline Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-4">
            {Object.entries(stages).map(([stageKey, stage]) => (
              <div key={stageKey} className={`w-72 border-t-4 ${getStageColor(stageKey)}`}>
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sm font-medium">{stage.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{stage.leads.length}</Badge>
                        <Button size="sm" variant="ghost">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ${calculateStageTotal(stage.leads).toLocaleString()}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Droppable droppableId={stageKey}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={`space-y-2 min-h-[200px] ${snapshot.isDraggingOver ? 'bg-muted/50' : ''} rounded-lg p-2`}
                        >
                          {stage.leads.map((lead, index) => (
                            <Draggable key={lead.id} draggableId={lead.id} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`p-3 bg-background border border-border rounded-lg hover:shadow-md transition-shadow cursor-grab ${
                                    snapshot.isDragging ? 'shadow-lg rotate-2' : ''
                                  }`}
                                >
                                  <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                      <h4 className="font-medium text-sm">{lead.name}</h4>
                                      <Badge className={getPriorityColor(lead.priority)}>
                                        {lead.priority}
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{lead.company}</p>
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium flex items-center gap-1">
                                        <DollarSign className="h-3 w-3" />
                                        ${lead.value.toLocaleString()}
                                      </span>
                                      <div className="flex gap-1">
                                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                          <Mail className="h-3 w-3" />
                                        </Button>
                                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                          <Phone className="h-3 w-3" />
                                        </Button>
                                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                                          <User className="h-3 w-3" />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};