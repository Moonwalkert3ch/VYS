'use client';

import { MessageCircle, ShoppingCart } from 'lucide-react';
import BottomNavBar from '@/components/BottomNavBar';

type NotificationType = 'message' | 'purchase';

interface Notification {
  id: string;
  type: NotificationType;
  content: string;
  timestamp: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'message',
    content: 'You have a new message from Jane Doe',
    timestamp: 'Just now',
    read: false,
  },
  {
    id: '2',
    type: 'purchase',
    content: 'Someone purchased your item: “Lampstand”',
    timestamp: '10 minutes ago',
    read: true,
  },
  {
    id: '3',
    type: 'purchase',
    content: 'Someone purchased your item: “Accent Chair”',
    timestamp: '10 minutes ago',
    read: true,
  },
  {
    id: '4',
    type: 'message',
    content: 'You have a new message from John Smith',
    timestamp: '10 minutes ago',
    read: true,
  },
];

export default function NotificationsPage() {
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-indigo-950">
        <h1 className="text-2xl font-bold mb-4 text-[#A1C9FF] text-center">Notifications</h1>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`flex items-start gap-4 p-4 rounded-md border transition ${
                notification.read ? 'bg-white' : 'bg-blue-50 border-blue-300'
              }`}
            >
              <div className="mt-1">
                {notification.type === 'message' ? (
                  <MessageCircle className="text-blue-600 h-6 w-6" />
                ) : (
                  <ShoppingCart className="text-green-600 h-6 w-6" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm">{notification.content}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
              </div>
            </li>
            
          ))}
        </ul>
      </div>

      <BottomNavBar />
    </>
  );
};


