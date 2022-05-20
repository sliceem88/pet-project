<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\IngredientsRepository;

#[Route('/api/ingredients', name: 'app_api_ingredients')]
class IngredientsController extends AbstractController
{

    public function __construct(
        EntityManagerInterface $entityManager,
        IngredientsRepository $ingredientsRepository
    ) {
        $this->ingredientsRepository = $ingredientsRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/read', name: 'read_api_ingredients')]
    public function index()
    {
        $ingredients = $this->ingredientsRepository->findAll();

        $result = [];

        foreach ($ingredients as $ingredient) {
            $result[] = $ingredient->toArray();
        }

        return $this->json($result);
    }
}
