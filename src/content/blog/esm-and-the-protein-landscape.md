---
title: "ESM & the Protein Landscape"
description: "Following protein-language-model-guided evolutionary trajectories to understand why some searches reach their targets while others get stuck."
pubDate: 2026-06-13
titleImage: "/blog-assets/esm-protein-landscape/esm-protein-landscape-title.png"
titleImageAlt: "ESM and the Protein Landscape"
draft: false
---

<p class="lead-question"><strong>Can a protein language model guide an evolutionary walk from a random amino-acid sequence toward a specific natural protein?</strong></p>

This project began in a project-based deep learning module taken last semester, on a topic at the intersection of protein language models and epistasis proposed by Luca Ferretti and Vitaly Belik. The questions that surfaced there are what's still being chased now.

The central question is: when a protein-sequence optimizer succeeds, how did it get there and why do other runs fail?

Protein language models are good at scoring and representing amino-acid sequences, and *most* protein-design work focuses on the endpoint: did the optimizer find a high-scoring, useful sequence? Here, the focus is on everything that happens on the way there.

Using a target-conditioned search guided by a protein language model, the full evolutionary trajectories of many stochastic walkers are tracked i.e. which mutations get accepted, which regions get revisited, where progress accelerates, and where the search gets stuck.

Different protein targets produce strikingly different search behavior. Some are reachable from many directions; others seem to have only a few narrow paths in. That contrast is what makes the optimizer itself worth studying as a dynamic system, not just as a sequence generator.

<figure>
  <img src="/blog-assets/esm-protein-landscape/fitness-landscape-mountain.png" alt="A mountain landscape illustrating a protein sequence optimization path rising through intermediate structures toward a fitness peak.">
  <figcaption>Example fitness landscape with excellent views and absolutely no guarantee of a route.</figcaption>
</figure>

## Valleys, Basins, and Open Questions

A key question being tested: do these trajectories carve out measurable, stage-dependent basins of attraction? These aren't necessarily physical free-energy basins. What we are chasing is algorithmic structures shaped jointly by the target, the language-model representation, the mutation-proposal rule, and the optimization schedule.

One strategy in use here is the *committor*: the probability that a search restarted from a given intermediate state eventually reaches a chosen destination. By branching runs from selected checkpoints, states committed to success can start to be separated from ones sitting on uncertain boundaries or stuck in traps.

That framing opens a few concrete questions. Can we spot failure early? Does the current score carry enough signal, or does trajectory history matter too? Can coupled mutations lead to routes that single mutations can't reach? And can changing the search dynamics make hard targets more tractable?

The work is still purely computational and reaching a model-defined target most probably says nothing about biological function on its own, and structural or experimental validation will be the next real test. For now, this is some *exciting stuff*.

<p class="media-kicker"><strong>A peak:</strong></p>

<img class="trajectory-gif" src="/blog-assets/esm-protein-landscape/evolutionary-walk-preview.gif" alt="Animated protein-sequence search trajectory" loading="lazy">
