---
title: People
description: Members of the e-Lite Research Group
---

import {Person} from "@site/src/components/Person";
import {people, alumni} from "@site/src/data/persons";

# e-Lite Group Members

## Current members

<div className="card-people row">
    {people.map(p => <Person key={p.name} {...p}/>)}
</div>

<hr/>

## Alumni

Former members of the e-Lite group

<div className="card-people row">
    {alumni.map(p => <Person key={p.name} {...p}/>)}
</div>


