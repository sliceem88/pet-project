<?php

namespace App\Entity;

use App\Repository\OrdersRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrdersRepository::class)]
class Orders
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $uu_id;

    #[ORM\Column(type: 'string', length: 100)]
    private $picca_name;

    #[ORM\Column(type: 'json')]
    private $ingredients = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUuId(): ?string
    {
        return $this->uu_id;
    }

    public function setUuId(string $uu_id): self
    {
        $this->uu_id = $uu_id;

        return $this;
    }

    public function getPiccaName(): ?string
    {
        return $this->picca_name;
    }

    public function setPiccaName(string $picca_name): self
    {
        $this->picca_name = $picca_name;

        return $this;
    }

    public function getIngredients(): ?array
    {
        return $this->ingredients;
    }

    public function setIngredients(array $ingredients): self
    {
        $this->ingredients = $ingredients;

        return $this;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'uu_id' => $this->uu_id,
            'piccaName' => $this->picca_name,
            'ingredients' => $this->ingredients
        ];
    }
}
