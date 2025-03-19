import React, { useState } from "react";

const ChatRAG: React.FC = () => {
  const [query] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [cases] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // // Handle user submitting query
  // const handleSearch = async () => {
  //   if (!query.trim()) return;
    
  //   // Switch UI to Chat Mode
  //   setChatMode(true);
  //   setLoading(true);

  //   // Add user's query to chat history
  //   setMessages([{ role: "user", text: query }]);

  //   try {
  //     // Fetch AI response (Replace with actual API)
  //     const chatResponse = await fetch(`https://api.legalai.com/chat?q=${encodeURIComponent(query)}`);
  //     const chatData = await chatResponse.json();

  //     // Fetch relevant cases (Replace with actual API)
  //     const casesResponse = await fetch(`https://api.legalai.com/retrieve-cases?q=${encodeURIComponent(query)}`);
  //     const casesData = await casesResponse.json();

  //     // Append AI response to chat
  //     setMessages((prev) => [...prev, { role: "ai", text: chatData.response }]);

  //     // Store relevant cases
  //     setCases(casesData?.cases || []);
  //   } catch (error) {
  //     setMessages((prev) => [...prev, { role: "ai", text: "Error retrieving response. Please try again." }]);
  //     setCases([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Handle follow-up questions
  const handleFollowUp = async (newQuery: string) => {
    if (!newQuery.trim()) return;
    
    setMessages((prev) => [...prev, { role: "user", text: newQuery }]);
    setLoading(true);

    try {
      const response = await fetch(`https://api.legalai.com/chat?q=${encodeURIComponent(newQuery)}`);
      const data = await response.json();

      setMessages((prev) => [...prev, { role: "ai", text: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Error retrieving response. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex text-[#2D2D2D] p-8">
      {/* Left: Chat Section */}
      <div className="w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center mb-4">Legal AI Chat</h1>
        
        <div className="flex-grow overflow-y-auto p-4 bg-[#F5F3EE] rounded-md h-[400px]">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 p-3 rounded-md ${msg.role === "user" ? "bg-[#A27D5C] text-white self-end" : "bg-white text-gray-700 self-start"}`}>
              <strong>{msg.role === "user" ? "You:" : "AI:"}</strong> {msg.text}
            </div>
          ))}
          {loading && <p className="text-gray-600">Thinking...</p>}
        </div>

        {/* Chat Input */}
        <div className="flex w-full mt-4 gap-2">
          <input
            type="text"
            placeholder="Ask a follow-up question..."
            className="w-full p-3 border rounded-md text-gray-700"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleFollowUp(e.currentTarget.value);
            }}
          />
          <button
            onClick={() => handleFollowUp(query)}
            className="px-4 py-3 bg-[#A27D5C] text-white rounded-md hover:bg-[#8C6245] transition"
          >
            Send
          </button>
        </div>
      </div>

      {/* Right: Relevant Cases */}
      <div className="w-1/2 bg-white shadow-lg rounded-lg p-6 ml-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center mb-4">Relevant Cases</h1>

        <div className="overflow-y-auto flex-grow h-[400px]">
          {cases.length > 0 ? (
            cases.map((caseItem, index) => (
              <div key={index} className="p-4 bg-[#F5F3EE] rounded-md mb-4 shadow">
                <h3 className="text-lg font-semibold">{caseItem.title}</h3>
                <p className="text-gray-700">{caseItem.summary}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No relevant cases found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatRAG;
