'use client';

import { Send } from 'lucide-react';
import BottomNavBar from '@/components/BottomNavBar';

export default function MessagesPage() {
  return (
    <>
        <main className="flex min-h-screen bg-gray-50 text-black">
            {/* Sidebar */}
            <aside className="w-1/3 max-w-sm border-r border-gray-200 bg-white p-4">
                <h2 className="text-lg font-semibold mb-4">Conversations</h2>
                <ul className="space-y-2">
                {/* Replace with dynamic conversation list */}
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition">
                    <p className="font-medium">John Smith</p>
                    <p className="text-xs text-gray-500 truncate">Another recent message...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Dallas Carter</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Dillon Biggs</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Zachary Kosher</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Ahsahd Muller</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Isaiah Ross</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Christopher Robinson</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Eilane Moss</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Anazalea Martin</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Justin Case</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                    <p className="font-medium">Demi Porter</p>
                    <p className="text-xs text-gray-500 truncate">Last message preview here...</p>
                </li>
                </ul>
            </aside>

            {/* Chat Area */}
            <section className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="border-b border-gray-200 p-4 bg-white">
                <h3 className="text-lg font-semibold">Jane Doe</h3>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Example messages */}
                <div className="self-start bg-gray-200 rounded-lg px-4 py-2 max-w-sm">
                    <p>Hello! I saw your listing and wanted to ask a few questions.</p>
                </div>
                <div className="self-end bg-blue-500 text-white rounded-lg px-4 py-2 max-w-sm">
                    <p>Sure, go ahead!</p>
                </div>
                <div className="self-start bg-gray-200 rounded-lg px-4 py-2 max-w-sm">
                    <p>Great! Are you located in East Tulsa?</p>
                </div>
                <div className="self-end bg-blue-500 text-white rounded-lg px-4 py-2 max-w-sm">
                    <p>No, I am in Coweta.</p>
                </div>
                <div className="self-start bg-gray-200 rounded-lg px-4 py-2 max-w-sm">
                    <p>I love the couch! I want to meet up.</p>
                </div>
                <div className="self-end bg-blue-500 text-white rounded-lg px-4 py-2 max-w-sm">
                    <p>I'm glad to hear. What day can you pick it up?</p>
                </div>
                <div className="self-start bg-gray-200 rounded-lg px-4 py-2 max-w-sm">
                    <p>Tuesday, 6/11/25 @ 6:30 P.M.</p>
                </div>
                </div>

                {/* Input Field */}
                <form className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                >
                    <Send className="h-5 w-5" />
                </button>
                </form>
            </section>
        </main>

        <BottomNavBar />
    </>
  );
};
// This component serves as a simple messaging interface.
// It includes a sidebar for conversations and a chat area for messages.
// The sidebar lists conversations with a preview of the last message.
// The chat area displays messages between the user and a selected contact.
// The input field at the bottom allows users to type and send messages.
// The component is styled with Tailwind CSS for a clean and modern look.
// The sidebar and chat area are responsive, adapting to different screen sizes.
// The Send icon from Lucide is used for the send button, providing a clear action for users.
// The component is designed to be user-friendly, with hover effects and transitions for better interactivity.
// Note: This code is a basic structure and can be expanded with dynamic data fetching, state management, and additional features as needed.
