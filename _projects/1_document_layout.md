---
layout: page
title: Document Layout Understanding
description: Multi-modal transformer for Visual Document Understanding in English and multilingual settings
img: assets/img/11.jpg
importance: 1
category: research
related_publications: true
---

**Guided by:** Dr. Santanu Chaudhary, IIT Jodhpur &nbsp;|&nbsp; **Duration:** July 2021 – May 2022

## Overview

This project explored **Visual Document Understanding (VDU)** — the task of comprehending the structure and semantics of documents that combine text, images, and layout information. We worked with **DocFormer**, a multi-modal transformer-based architecture that jointly models textual, visual, and spatial features of document images.

## Key Contributions

- Applied DocFormer for document understanding tasks in **English and multilingual settings**, extending its applicability beyond English-only benchmarks.
- Investigated how spatial (layout) information fuses with textual tokens in transformer attention to improve downstream task performance.
- Evaluated on standard VDU benchmarks including form understanding and document classification tasks.

## What is DocFormer?

DocFormer is a multi-modal transformer that encodes:

- **Text tokens** (from OCR output)
- **Visual features** (from a CNN backbone over the document image)
- **Spatial/layout features** (bounding box coordinates)

These modalities are jointly processed through a unified transformer, enabling the model to capture cross-modal dependencies unique to document understanding.

## Skills & Tools

`Python` · `PyTorch` · `Transformers (HuggingFace)` · `DocFormer` · `OCR` · `Multi-modal Learning`

<a href="https://github.com/uakarsh" class="btn btn-sm btn-outline-primary mt-2" target="_blank">
  <i class="fab fa-github"></i> View on GitHub
</a>
