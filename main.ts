#!/usr/bin/env ts-node
import { $ } from 'zx';

const msg = "Hello World"
await $`echo ${msg}`