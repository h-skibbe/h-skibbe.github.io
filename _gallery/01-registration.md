---
title: "ディープラーニングによる画像位置合わせ(研究成果)"
img: "/imgs/registration.svg"
order: 10
---

この図は、2つの脳画像をディープラーニングモデルを使って位置合わせする方法（レジストレーション）を示しています。
(a) 最初に、固定画像（基準となる画像）と移動画像（位置を合わせたい画像）を入力（input）して、レジストレーションネットワークに与えます。このネットワークは、移動画像(moving image)をどのように変形すれば固定画像(fixed image)と一致するかを学習します。出力として得られるのが変形フィールド(deformation field)で、脳画像上の黄色いグリッドで表され、どの部分をどのように動かすかを示しています。
(b) この変形フィールドを移動画像に適用することで、移動後画像(moved image)が得られます。これは固定画像に位置合わせされた画像で、より近い形になります。

**関連論文**:  
- [PatchMorph: A Stochastic Deep Learning Approach for Unsupervised 3D Brain Image Registration with Small Patches](https://arxiv.org/abs/2312.06958)  
- [Exploring the performance of implicit neural representations for brain image registration](https://www.nature.com/articles/s41598-023-44517-5)
- [Implicit neural representations for joint decomposition and registration of gene expression images in the marmoset brain](https://link.springer.com/chapter/10.1007/978-3-031-43999-5_61)