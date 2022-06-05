<?php

namespace App\Controller;

use App\Repository\OrdersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

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

    /**
     * @var Request
     */
    protected $request;

    public function __construct(
        EntityManagerInterface $entityManager,
        OrdersRepository       $ordersRepository
    )
    {
        $this->ordersRepository = $ordersRepository;
        $this->entityManager = $entityManager;
        $this->request = Request::createFromGlobals();
    }

    #[Route('/read', name: 'read_api_user_orders')]
    public function index()
    {
        $uu_id = $this->getUuid();
        $result = [];
        if ($uu_id) {
            $orders = $this->ordersRepository->findBy(['uu_id' => $uu_id]);

            foreach ($orders as $order) {
                $result[] = $order->toArray();
            }
        }

        return $this->json($result);
    }

    public function getUuid()
    {
        $data = json_decode($this->request->getContent(), true);
        return $data[OrdersRepository::UU_ID_KEY] ?? '';
    }
}
