<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PizzasRepository;

#[Route('/api/pizzas', name: 'app_api_pizzas')]
class PizzasController extends AbstractController
{

    public function __construct(
        EntityManagerInterface $entityManager,
        PizzasRepository $pizzasRepository
    ) {
        $this->pizzasRepository = $pizzasRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/read', name: 'read_api_pizzas')]
    public function index()
    {
        $pizzas = $this->pizzasRepository->findAll();

        $result = [];

        foreach ($pizzas as $pizza) {
            $result[] = $pizza->toArray();
        }

        return $this->json($result);
    }
}
