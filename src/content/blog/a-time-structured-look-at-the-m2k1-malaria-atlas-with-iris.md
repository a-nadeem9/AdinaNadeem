---
title: "A Time-Structured Look at the M2K1 Malaria Atlas with IRIS"
description: "A visualization experiment using IRIS to redraw the PfM2K1 single-cell malaria atlas around supplied pseudotime."
pubDate: 2026-06-16
draft: false
---

Howdy folks! I wanted to write up a small visualization experiment that started, as many totally reasonable scientific ideas do, with me seeing something cool on LinkedIn and immediately thinking: wait, can I try that on malaria data?

The thing I saw was [IRIS](https://doi.org/10.48550/arXiv.2605.30810), a method for drawing time-structured data. I had been looking at the [PfM2K1 single-cell atlas](https://doi.org/10.1101/2025.04.14.648697) from Votborg-Nov&eacute;l and colleagues, so that became the obvious test case: could IRIS make the parasite's asexual developmental timeline easier to read than the usual UMAP?

So, what changed when I put the M2K1 asexual atlas into IRIS? A lot, but also not a lot, and I mean that in a good way. The biology is the same. The cells are the same. The pseudotime is the same. What changes is the shape of the story on the page.

A bit of context first. The M2K1 atlas paper built a single-cell atlas for PfM2K1, a recently adapted Malian *Plasmodium falciparum* isolate. After quality control, the atlas had 26,447 infected red blood cells. For this little experiment, I used the 22,282 asexual cells, which the paper orders across the 48-hour intra-erythrocytic developmental cycle.

Importantly, IRIS is not inferring the parasite age here. The atlas paper already did the hard work: the authors treated the asexual and sexual branches separately, used PHATE and Slingshot to define the asexual trajectory, and scaled that trajectory into hours post invasion. I am giving that existing pseudotime to IRIS. IRIS is helping me look at the timeline; it is not discovering the timeline from scratch.

Let's start with the familiar view from the paper. The original atlas uses UMAP, which is great for showing the atlas shape, the neighborhoods, and the broad structure. But developmental time can still feel like something you have to read through color. In the comparison below, the right panel uses the paper's UMAP coordinates, and the left panel is the same 22,282 asexual cells redrawn with IRIS.

<figure class="wide-embed">
  <iframe class="interactive-frame" src="/blog-assets/m2k1-iris/iris_vs_umap_m2k1.html" title="Interactive M2K1 IRIS versus UMAP comparison"></iframe>
  <figcaption>Figure 1. Interactive IRIS vs UMAP comparison for the M2K1 asexual atlas. Same 22,282 cells, two layouts, stage and pseudotime coloring.</figcaption>
</figure>

You might be wondering: is this replacing UMAP? Nope. That is not really the point. UMAP is still useful because it shows local structure nicely. What IRIS is doing is different: it asks whether a known ordering variable, like pseudotime, can become part of the layout itself instead of only being painted on afterward.

That is the nice trick. In IRIS, radius carries the ordered variable. Here, farther from the center means later atlas pseudotime. The angle is then optimized to preserve as much of the high-dimensional neighborhood structure as possible under that radial time constraint. So time becomes spatial, but the transcriptomic neighborhoods are still part of the picture.

That sounds small, but for this dataset I think it helps. Instead of staring at a cloud and mentally untangling a color gradient, the asexual cycle has a direction you can actually follow.

<figure>
  <img src="/blog-assets/m2k1-iris/blog_m2k1_asexual_iris_annotated_reader_guide_v2.png" alt="Annotated IRIS layout of the M2K1 asexual atlas with small numbered landmarks for early rings, late rings, trophozoites, and schizonts.">
  <figcaption>Figure 2. Numbered landmarks on the M2K1 asexual atlas in IRIS: early rings, late rings, trophozoites, and schizonts.</figcaption>
</figure>

This was the basic version I made first, just to see how the atlas looked in IRIS. The numbered points are simple landmarks: early rings, late rings, trophozoites, and schizonts. Nothing too fancy. Just enough to give the eye a route through the atlas.

<figure>
  <img src="/blog-assets/m2k1-iris/blog_m2k1_asexual_iris_annotated_reader_guide.png" alt="Annotated IRIS layout of the M2K1 asexual atlas showing early rings, late rings, trophozoites, schizonts, radius, and angle.">
  <figcaption>Figure 3. Annotated reader guide for the IRIS view. The callouts spell out the main biological regions and the two layout rules: radius follows supplied atlas pseudotime, while angle reflects transcriptomic neighborhood structure.</figcaption>
</figure>

The annotated version is the one I would use if I were walking someone through the plot live. It spells out the two rules that matter: outward means later supplied pseudotime, and around the circle means expression-neighborhood structure. Once that clicks, the figure becomes much easier to read.

So, what do I take from this? Not that IRIS found a new malaria biology story. It did not. This is not a new inference step, and it is not a replacement for the original atlas analysis. The radius is supplied atlas pseudotime, and the atlas is M2K1. That matters.

But as a way to look at an existing story? I like it. Sometimes a method is useful not because it gives you a dramatic new answer, but because it changes where your attention goes. For me, IRIS made the temporal structure of this atlas easier to see, easier to explain, and honestly, just more fun to think about.

## References

Votborg-Novel L, Kampmann M, Carrasquilla M, et al. *Seasonal transcriptional profiling of malaria parasites using a new single-cell atlas of a Malian Plasmodium falciparum isolate*. bioRxiv, 2025. <https://doi.org/10.1101/2025.04.14.648697>

Ondov B, Chang C-H, Zhou W, et al. *IRIS: time-structured manifold projections*. arXiv, 2026. <https://doi.org/10.48550/arXiv.2605.30810>

The original IRIS interactive example that sent me down this path is here: <https://clinicalnlp.org/IRIS/iris_vs_umap.html>.
