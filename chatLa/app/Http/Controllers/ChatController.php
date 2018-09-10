<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Chat;
use Pusher\Laravel\Facades\Pusher;

class ChatController extends Controller
{
    public function getUserConversationById(Request $request){
        $userId = $request->id;
        $authUserId = $request->user()->id;
        $chats = Chat::whereIn('sender_id',[$userId, $authUserId])
            ->whereIn('receiver_id',[$userId, $authUserId])
            ->orderBy('created_at','asc')
            ->get(); 

        return response()->json(['data'=>$chats],200);
        
    }
    public function w(Request $request){
        $senderId= $request->user()->id;
        $receiverId= $request->receiver_id;
        $chat = $request->chat;
        Chat::create([
            'sender_id'=>$senderId,
            'receiver_id'=>$receiverId,
            'chat'=>$chat,
            'read'=>1
        ]);
    }
    public function saveUserChat(Request $request){
        $senderId= $request->user()->id;
        $receiverId= $request->receiver_id;
        $chatText = $request->chat;
        $chat= Chat::create([
                'sender_id'=>$senderId,
                'receiver_id'=>$receiverId,
                'chat'=>$chatText,
                'read'=>1
                ]);
        $data=Chat::where('id',$chat->id)->first();
        Pusher::trigger('chat_channel','chat_saved',['message'=>$data]);
        return response()->json(['data'=>$data],201);
    }
}
