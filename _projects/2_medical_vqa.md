---
layout: page
title: Medical Visual Question Answering
description: VQA system for X-ray and MRI scans using NLP and Computer Vision — 90% test accuracy
img: assets/img/7.jpg
importance: 2
category: research
---

**Duration:** February 2021 – May 2021

## Overview

This project tackled **Medical Visual Question Answering (VQA)** — given a medical image (X-ray or MRI scan of the brain, kidney, or lungs) and a natural language question, the system produces a relevant answer by attending jointly over the image and question.

## Problem Statement

Medical imaging generates vast amounts of diagnostic data, but interpreting it requires specialized expertise. A VQA system can assist clinicians by answering specific questions about scan findings, making AI a useful second opinion tool in medical workflows.

## Approach

- Extracted **visual features** from medical images using a CNN backbone, producing spatial feature maps.
- Encoded **question text** using NLP techniques (tokenization + embedding).
- Applied **multi-modal attention** to fuse visual and textual representations, enabling the model to focus on image regions relevant to the question.
- Built and trained end-to-end using **TensorFlow**.

## Results

- Achieved approximately **90% accuracy** on the test dataset.
- The model generalized well across different scan types (brain, kidney, lungs) and varied question formats.

## Skills & Tools

`Python` · `TensorFlow` · `Computer Vision` · `NLP` · `Multi-modal Attention` · `Medical Imaging`

<a href="https://github.com/uakarsh" class="btn btn-sm btn-outline-primary mt-2" target="_blank">
  <i class="fab fa-github"></i> View on GitHub
</a>
