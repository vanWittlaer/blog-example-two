<?php declare(strict_types=1);

namespace VanWittlaer\ExampleTwo\Subscriber;

use Shopware\Core\Checkout\Customer\CustomerEvents;
use Shopware\Core\Framework\Event\DataMappingEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class CustomerEventsSubscriber implements EventSubscriberInterface
{

    public static function getSubscribedEvents()
    {
        return [
          CustomerEvents::MAPPING_ADDRESS_CREATE => 'onMappingAddress',
          CustomerEvents::MAPPING_REGISTER_ADDRESS_SHIPPING => 'onMappingAddress',
          CustomerEvents::MAPPING_REGISTER_ADDRESS_BILLING => 'onMappingAddress',
        ];
    }

    public function onMappingAddress(DataMappingEvent $event): void
    {
        $data = $event->getInput();
        $address = $event->getOutput();

        $address['customFields']['vanwittlaer_what_three_words'] = $data->get('w3w');

        $event->setOutput($address);
    }
}
