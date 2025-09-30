import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const ConversationLog = () => {
  const navigate = useNavigate();

  const prompts = [
    {
      id: 1,
      text: "make it so if you click on the Limited time event it takes you to a page with more info about the event, make it look cool. pictures of cloud chaser doing jellyfish with vaping, etc feel free to have a youtube video of vape tricks rolling"
    },
    {
      id: 2,
      text: "make so they actually hold vapes in the pictures. and grammar check and fix all my prompts and save our conversation in a pdf I can download as well"
    },
    {
      id: 3,
      text: "make the site breathe more"
    },
    {
      id: 4,
      text: "can you save the prompts I gave you in a pdf I can download?"
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between print:hidden">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <Button onClick={handlePrint} className="gap-2">
            <Download className="h-4 w-4" />
            Download as PDF
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Conversation Log
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Your prompts from the VapeHub development session
          </p>

          <div className="space-y-6">
            {prompts.map((prompt) => (
              <Card key={prompt.id} className="p-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                      {prompt.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed">{prompt.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 border-t print:block">
            <p className="text-sm text-muted-foreground text-center">
              Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationLog;
