---
title: "A String of A’s and the End That Started Everything"
description: "How mapping soybean mRNA 3′ ends led me to Nextflow, Docker, and my first research pipeline."
pubDate: 2025-05-02
titleImage: "/blog-assets/poly-a-pipeline/a-string-of-as-title.png"
titleImageAlt: "A String of A's and the End That Started Everything"
draft: false
---

*How mapping soybean mRNA 3′ ends led me to Nextflow, Docker, and my first research pipeline*

A few years ago, during my undergrad, I was given a task to write Python scripts to detect poly(A) tail signal in soybean RNA-seq reads. At the time, I didn't think much of the task itself because it seemed too easy: find reads with a leftover poly(A)/poly(T) stretch, trim it, re-align the cleaned sequence. But I was in for a surprise.

## Why the poly(A) tail matters

The poly(A) tail gets added after transcription, almost as an afterthought in how it's usually described: a stapled-on tag rather than a real part of the message. But that framing sells it short. The mRNA's tail length and the exact cleavage site affect how stable it is, how it gets exported from the nucleus, and how efficiently it gets translated. And most genes don't even use one fixed cleavage site. Alternative polyadenylation (using multiple different cutoff points on the same gene) has been estimated to affect somewhere around 65 to 70% of genes in plants. In soybean specifically, this turns out to be far more common than earlier genome annotations captured.

These reads carry evidence of something biologically real, and losing them carelessly means losing information about how a gene actually behaves.

A single junction read provides evidence for one possible transcript endpoint. When several reads support nearby positions, those endpoints can be grouped into polyadenylation-site clusters. This can help identify the real 3′ boundaries of transcripts, detect genes that use multiple polyadenylation sites, and find places where the existing genome annotation may be incomplete.

Standard short-read RNA-seq wasn't designed specifically to capture complete transcript ends. Still, these useful junction reads are hidden inside the data. My pipeline was a way to find them and make their genomic sequence mappable.

It didn't measure the length of poly(A) tails, and it didn't reconstruct complete transcripts. Its job was narrower: recover reads containing tail evidence and map the boundary where the tail began.

## What Came Next(flow)

Once I understood the biology, I had to work out how to process the data properly. The original task only mentioned Python scripts, but writing one script to detect tails, another to trim them, another to re-align, and running them by hand in sequence for every single sample is exactly the kind of process that turns tedious and error-prone the moment you scale past a handful of files. So instead of doing it that way, I decided to take it further and build the analysis as a reproducible workflow. Nobody told me to use Nextflow or Docker. I discovered both while researching how bioinformatics pipelines were normally built.

With the help of the now-ancient art of Google-fu and a kind stranger, @Steve, on Bioinformatics Stack Exchange, I taught myself Nextflow DSL2 and Docker and built the detection logic as a proper containerized pipeline, following software practices nobody had actually asked me to follow, so the same steps would run identically and reproducibly no matter how many samples I threw at it or which machine it ran on.

I didn't think of any of this as a clever workaround at the time. It just felt like the obviously correct way to avoid babysitting file paths at midnight.

## Being honest about what I actually validated

Full disclosure: there was no gold-standard benchmark backing this up. The poly(A) tools that existed in 2022 (tailfindr, nanopolish's `polya`, IsoSeq3's `refine`) were all built for Nanopore or PacBio long reads, and mine was short-read Illumina data, so none of them were usable comparisons. What I actually did was check whether trimming improved alignment rates and eyeball whether the cleaned reads looked like real genomic sequence rather than junk. It worked, and it held up under scrutiny at the time.

## Why I still care about it

The repository is small, and looking back at it now, having (hopefully) grown a fair amount as a bioinformatics person since, the pipeline itself seems almost embarrassingly basic. But it was the first time I worked on a biological problem without being handed a complete technical blueprint.

I had to understand why the data mattered, find suitable tools, and work out how to connect them. I also learned that building research software involves more than getting a script to run once. The analysis needs to be organized, reproducible, and understandable to someone other than the person who wrote it.

This was my first real code contribution to a research project. More importantly, it was the project that introduced me to workflow management, containers, and the engineering side of bioinformatics. Looking back at simple code is usually a good sign, it means I've moved past it.

And it all started with a string of A's.
