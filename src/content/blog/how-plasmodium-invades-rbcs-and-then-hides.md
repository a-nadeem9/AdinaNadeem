---
title: "Notes: How Plasmodium Invades Red Blood Cells (and Then Hides)"
description: "Receptor binding, antigenic variation, and dry-season persistence in Plasmodium."
pubDate: 2026-01-07
titleImage: "/blog-assets/pfemp1-malaria/how-plasmodium-invades-rbcs-title.png"
titleImageAlt: "How Plasmodium Invades RBCs and Then Hides"
draft: false
---

<p class="post-deck post-deck-orange">Receptor binding, antigenic variation, and dry-season persistence in <em>Plasmodium</em></p>

*Plasmodium* species exhibit one of the coolest examples of molecular evolution I've come across. Malaria isn't one disease with one trick; instead, different *Plasmodium* species have evolved completely different strategies to get past your immune system and into your red blood cells. Two of the best-studied examples—one from *P. vivax* and one from *P. falciparum*—show just how different “getting in” and “staying hidden” can look.

## 1. Story A: *P. vivax*

To invade a red blood cell, the parasite—at this stage called a merozoite—has to bind something on the cell surface first. For *P. vivax*, that receptor is called the Duffy antigen, though the more current name is ACKR1 (atypical chemokine receptor 1). Its normal function is unrelated to malaria—i.e., it binds chemokines in the blood—but the parasite has repurposed it as an entry point.

*P. vivax* has a protein, PvDBP, that binds directly to ACKR1, forming a genuine ligand–receptor pair. What's interesting is that people who don't have ACKR1 on their red blood cells—this is fairly common in parts of West and Central Africa—are essentially resistant to *P. vivax* infection through this route. It is one of the cleanest examples in human biology of a receptor polymorphism directly causing disease resistance at a population scale.

## 2. Story B: *P. falciparum*

*P. falciparum* plays an entirely different game. Once inside a red blood cell, instead of hiding, it remodels the cell from the inside out.

It starts producing a large protein called PfEMP1 and exports it to the cell's surface. PfEMP1 then acts as a molecular anchor, sticking the infected cell to blood-vessel walls.

This matters clinically because cells that stick to vessel walls avoid getting filtered out by the spleen, but the same stickiness is also responsible for a lot of the vascular blockages seen in severe malaria, including cerebral malaria.

PfEMP1 is made up of two main domain types:

<ul class="protein-domain-list">
  <li><strong>DBL domains (Duffy-binding-like)</strong> - the name is a bit misleading, since most of them don't actually bind Duffy/ACKR1 anymore.</li>
  <li><strong>CIDR domains</strong> - these bind host receptors such as EPCR and CD36, and different CIDR subtypes seem to prefer different receptors.</li>
</ul>

<figure class="protein-figure">
  <img src="/blog-assets/pfemp1-malaria/pfemp1-o96108-loop.gif" alt="Animated surface model of PfEMP1 O96108 spanning a red-blood-cell membrane, with each protein region shown in a different color." loading="lazy">
  <figcaption class="protein-caption">Fig. 1: A depiction of the PfEMP1 protein spanning the red-blood-cell membrane. <strong>Color key:</strong> <span class="protein-key protein-key--nts">yellow — NTS;</span> <span class="protein-key protein-key--dbl-alpha">cyan — DBLα;</span> <span class="protein-key protein-key--cidr-alpha">orange — CIDRα;</span> <span class="protein-key protein-key--dbl-gamma">purple — DBLγ;</span> <span class="protein-key protein-key--tm">green — transmembrane segment;</span> <span class="protein-key protein-key--ats">blue — ATS core.</span> The pink band represents the red-blood-cell membrane, and dotted connections indicate unresolved or flexible sequence.</figcaption>
</figure>

### 2.1 Var Genes and Antigenic Variation

PfEMP1 is not encoded by one gene - it's encoded by an entire family of roughly 60 related but distinct genes called var genes, clustered mostly near the chromosome ends. “Multicopy” doesn't mean identical copies here; each var gene is basically an alternate recipe for PfEMP1, producing a structurally different variant.

The parasite only switches on one var gene at a time through mutually exclusive, monoallelic expression. Since your immune system builds antibodies against whatever variant it has already seen, the parasite periodically swaps which gene is active and changes its surface disguise. It's not a single hiding trick; it's a constant identity shuffling that keeps it one step ahead of your adaptive immune system.

Which CIDR domain a var gene has, and which genomic class it belongs to, seems to loosely predict how severe the resulting infection is:

<div class="table-scroll">
  <table>
    <caption>Table 1: CIDR domain subtypes and disease severity</caption>
    <thead>
      <tr>
        <th scope="col">CIDR subtype</th>
        <th scope="col">Host receptor bound</th>
        <th scope="col">Associated severity</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>CIDRα1</td><td>EPCR</td><td>More severe disease</td></tr>
      <tr><td>CIDRα2–6</td><td>CD36</td><td>Milder, uncomplicated infections</td></tr>
      <tr><td>CIDRβ/γ/δ</td><td>CD36 (variants)</td><td>Generally uncomplicated</td></tr>
    </tbody>
  </table>
</div>

<div class="table-scroll">
  <table>
    <caption>Table 2: Var gene upstream classes</caption>
    <thead>
      <tr>
        <th scope="col">Ups class</th>
        <th scope="col">Genomic location</th>
        <th scope="col">Receptor tendency</th>
        <th scope="col">Severity association</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>UpsA</td><td>Subtelomeric</td><td>Enriched for EPCR-binding CIDRα1</td><td>More severe</td></tr>
      <tr><td>UpsB</td><td>Subtelomeric</td><td>Mixed CIDR types</td><td>Variable</td></tr>
      <tr><td>UpsC</td><td>Central chromosome</td><td>Mostly CD36-binding</td><td>Uncomplicated</td></tr>
      <tr><td>UpsE</td><td>Subtelomeric, special</td><td>Often EPCR-associated</td><td>Severe (less common)</td></tr>
    </tbody>
  </table>
</div>

Var-gene switching also explains why *P. falciparum* infections can persist through the dry season without causing symptoms. Each time the immune system catches up to one PfEMP1 variant, the parasite switches to a different var gene and presents a new surface antigen that the antibodies don't recognize yet. That's the actual mechanism behind chronic, low-level, asymptomatic carriage between transmission seasons.

But dry-season survival isn't just antibody dodging. Work from Silvia Portugal's lab (Andrade et al. 2020, *Nature Medicine*) showed that during the dry season, *P. falciparum* shifts toward low-adhesion PfEMP1 variants: infected cells circulate longer instead of sticking to vessels, but they also get filtered out by the spleen more easily. That combination keeps parasite levels below the symptomatic threshold while a small reservoir survives until the next transmission season.

<div class="notes-divider" aria-hidden="true"><span>*</span></div>

<section class="notes-section" aria-labelledby="notes-heading">
  <h2 id="notes-heading">My notes</h2>
  <div class="notes-book" data-notes-book>
    <button class="notes-book__arrow notes-book__arrow--previous" type="button" data-notes-previous aria-label="Previous notes page">&larr;</button>
    <div class="notes-book__page-frame" data-notes-page-frame>
      <img data-notes-page src="/blog-assets/pfemp1-malaria/notes-page-1.jpg" alt="Page 1 of handwritten notes about Duffy/ACKR1 and receptor–ligand binding." loading="lazy">
      <img data-notes-page src="/blog-assets/pfemp1-malaria/notes-page-2.jpg" alt="Page 2 of handwritten notes about DBL, CIDR, PfEMP1, and ATS." loading="lazy" hidden>
      <img data-notes-page src="/blog-assets/pfemp1-malaria/notes-page-3.jpg" alt="Page 3 of handwritten notes about var genes and upstream classes." loading="lazy" hidden>
      <img data-notes-page src="/blog-assets/pfemp1-malaria/notes-page-4.jpg" alt="Page 4 of handwritten notes about dry-season persistence and reduced cytoadhesion." loading="lazy" hidden>
    </div>
    <button class="notes-book__arrow notes-book__arrow--next" type="button" data-notes-next aria-label="Next notes page">&rarr;</button>
    <p class="notes-book__counter" aria-live="polite">Page <span data-notes-current>1</span> of <span data-notes-total>4</span></p>
  </div>
</section>
