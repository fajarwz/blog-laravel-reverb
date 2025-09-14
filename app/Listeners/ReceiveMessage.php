<?php

namespace App\Listeners;

use App\Events\SendMessage;
use Laravel\Reverb\Events\MessageReceived;

class ReceiveMessage
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
        if ($messageEvent->event === 'SendMessage') {
            SendMessage::dispatch($messageEvent->data->message);
        }
    }
}
