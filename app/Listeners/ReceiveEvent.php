<?php

namespace App\Listeners;

use App\Events\UserIsTyping;
use Laravel\Reverb\Events\MessageReceived;

class ReceiveEvent
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(MessageReceived $event): void
    {
        $messageEvent = json_decode($event->message);
        if ($messageEvent->event === 'UserIsTyping') {
            UserIsTyping::dispatch($messageEvent->data->userId);
        }
    }
}
