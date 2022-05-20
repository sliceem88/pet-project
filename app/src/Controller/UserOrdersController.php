<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\OrdersRepository;

#[Route('api/user/orders', name: 'app_api_user_orders')]
class UserOrdersController extends AbstractController
{

    /**
     *
     * @var EntityManagerInterface
     */
    public $entityManager;

    /**
     *
     * @var OrdersRepository
     */
    public $ordersRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        OrdersRepository $ordersRepository
    ) {
        $this->orders = $ordersRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/read', name: 'read_api_user_orders')]
    public function index($uu_id)
    {
        $orders = $this->ordersRepository->findBy(['uu_id' => $uu_id]);
        $result = [];

        foreach ($orders as $order) {
            $result[] = $order->toArray();
        }

        return $this->json($result);
    }
}
